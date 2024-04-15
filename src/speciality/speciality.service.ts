import { Injectable } from '@nestjs/common';
import { CreateSpecialityDto } from './dto/create-speciality.dto';
import { UpdateSpecialityDto } from './dto/update-speciality.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Speciality } from './schema/speciality.schema';
import { Model } from 'mongoose';

@Injectable()
export class SpecialityService {
  constructor(@InjectModel(Speciality.name) private specialityModel:Model<Speciality>){}

  
  async create(createSpecialityDto: CreateSpecialityDto) {
    const newSpec = await this.specialityModel.create(createSpecialityDto)
    return newSpec
  }

  findAll() {
    return this.specialityModel.find().populate('workers')
  }

  findOne(id: string) {
    return this.specialityModel.findById(id)
  }

  update(id: string, updateSpecialityDto: UpdateSpecialityDto) {
    return this.specialityModel.findByIdAndUpdate(id,updateSpecialityDto)
  }

  remove(id: string) {
    return this.specialityModel.deleteOne({_id:id});
  }
}
