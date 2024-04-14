import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Admin, AdminDocument } from './schemas/admin.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { LoginAdminDto } from './dto/login-admin.dto';
import { Response } from 'express';


@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin.name) private adminModel:Model<Admin>,
  private readonly jwtService: JwtService){}

/*********************************getToken******************************************** */
  async getTokens(admin: AdminDocument) {
    const payload = {
      id: admin._id,
      is_active: admin.is_active,
     
    };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);
    return {
      access_token: accessToken,
      refreshToken: refreshToken,
    };
  }

/***********************************Registration************************************************/



 async create(createAdminDto: CreateAdminDto) {
  const {password,confirm_password} = createAdminDto

  if(password != confirm_password){
    throw new BadRequestException("Passwords do not match")
  }
  const hashed_password = await bcrypt.hash(password,7)
    const newAdmin = await this.adminModel.create({
      ...createAdminDto,
      hashed_password
    })
    const tokens = await this.getTokens(newAdmin)
    const hashed_refresh_token = await bcrypt.hash(tokens.refreshToken,7)
    const updatedAdmin = await this.adminModel.findByIdAndUpdate(newAdmin._id,
      {hashed_refresh_token},{new:true}
    )

return updatedAdmin
}


  /******************************************************************** */
  findAll() {
    return this.adminModel.find()
  }

  findOne(id: string) {
    return this.adminModel.findById(id)
  }

  update(id: string, updateAdminDto: UpdateAdminDto) {
    return this.adminModel.findByIdAndUpdate(id,updateAdminDto)
  }

  remove(id: string) {
    // return this.adminModel.findByIdAndDelete(id)
    return this.adminModel.deleteOne({_id:id})
  }




// -------------------LOGIN-------------------------------/

async login(loginAdminDto: LoginAdminDto, res: Response) {

  const { email, password } = loginAdminDto;

  const admin = await this.adminModel.findOne({email:email});
  if (!admin) {
    throw new BadRequestException('Admin not found');
  }

  if (!admin.is_active) {
    throw new BadRequestException('Admin not active');
  }
  const isMatchPass = await bcrypt.compare(password, admin.hashed_password);
  if (!isMatchPass) {
    throw new BadRequestException('Password do not match');
  }

  const tokens = await this.getTokens(admin);
  const hashed_refresh_token = await bcrypt.hash(tokens.refreshToken, 7);
  const updatedAdmin= await this.adminModel.findByIdAndUpdate(
    admin._id,{ hashed_refresh_token },{new:true}
   
  );
  res.cookie('refresh_token', tokens.refreshToken, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  });
  const response = {
    message: 'Admin logged in',
    admin: updatedAdmin,
    tokens,
  };
  return response;
}

// -------------------LOGOUT-------------------------------
async logout(refreshToken: string, res: Response) {
  
  const adminDate = await this.jwtService.verify(refreshToken, {
    secret: process.env.REFRESH_TOKEN_KEY,
  });
  if (!adminDate) {
    throw new ForbiddenException('Admin not verified');
  }
  const updatedAdmin = await this.adminModel.findByIdAndUpdate({ _id: adminDate.id },
    { hashed_refresh_token: null },{new:true} 
  );
  res.clearCookie('refresh_token');
  const response = {
    message: 'Admin logged out successfully',
    admin_refresh_token: updatedAdmin.hashed_refresh_token,
  };
  return response;
}

/**************************************RefreshToken****************************************************** */
async refreshToken(adminId: string, refreshToken: string, res: Response) {
  const decodedToken = await this.jwtService.decode(refreshToken);
  if (adminId !== decodedToken['_id']) {
    throw new BadRequestException('Ruxsat etilmagan');
  }
  const admin = await this.adminModel.findOne({ _id: adminId });
  if (!admin || !admin.hashed_refresh_token) {
    throw new BadRequestException('admin not found');
  }
  const tokenMatch = await bcrypt.compare(
    refreshToken,
    admin.hashed_refresh_token,
  );
  if (!tokenMatch) {
    throw new ForbiddenException('Forbidden');
  }
  const tokens = await this.getTokens(admin);
  const hashed_refresh_token = await bcrypt.hash(tokens.refreshToken, 7);
  const updatedAdmin = await this.adminModel.findByIdAndUpdate({_id: admin.id},
    { hashed_refresh_token },{new:true}
  );
  res.cookie('refresh_token', tokens.refreshToken, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  });
  const response = {
    message: 'Admin refreshed ',
    admin: updatedAdmin,
    tokens,
  };
  return response;
}
 }
