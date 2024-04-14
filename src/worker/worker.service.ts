import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { Worker, WorkerDocument } from './schema/worker.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Speciality } from 'src/speciality/schema/speciality.schema';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class WorkerService {
  constructor(@InjectModel(Worker.name) private workerModel:Model<Worker>,
  @InjectModel(Speciality.name) private specModel:Model<Speciality>,
  private readonly jwtService: JwtService){}

  async getTokens(worker: WorkerDocument) {
    const payload = {
      id: worker._id,
      is_active: worker.is_active,
     
    };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.ACCESS_TOKEN_WORKER_KEY,
        expiresIn: process.env.ACCESS_TOKEN_WORKER_TIME,
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.REFRESH_TOKEN_WORKER_KEY,
        expiresIn: process.env.REFRESH_TOKEN_WORKER_TIME,
      }),
    ]);
    return {
      access_token: accessToken,
      refreshToken: refreshToken,
    };

    /******************************************************************************** */
  }
  async create(createWorkerDto: CreateWorkerDto) {
const{speciality_id} = createWorkerDto
const {password,confirm_password} = createWorkerDto
  if(password != confirm_password){
    throw new BadRequestException("Passwords do not match")
  }
  const hashed_password = await bcrypt.hash(password,7)
  
const spec = await this.specModel.findById(speciality_id)
if(!spec){
  throw new BadRequestException("Bunday Spec yoq")
}
const newWorker = await this.workerModel.create({...createWorkerDto,hashed_password})
const tokens = await this.getTokens(newWorker)

const hashed_refresh_token = await bcrypt.hash(tokens.refreshToken,7)

const updatedWorker = await this.workerModel.findByIdAndUpdate(newWorker._id,
  {hashed_refresh_token},{new:true}
)
  return updatedWorker
  }




  findAll() {
    return this.workerModel.find().populate('speciality_id')
  }

  findOne(id: string) {
    return this.workerModel.findById(id)
  }

  update(id: string, updateWorkerDto: UpdateWorkerDto) {
    return this.workerModel.findByIdAndUpdate(id,updateWorkerDto)
  }

  remove(id:string) {
    return this.workerModel.deleteOne({_id:id})
  }
}
