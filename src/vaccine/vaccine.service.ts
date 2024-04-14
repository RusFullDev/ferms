import { Injectable } from '@nestjs/common';
import { CreateVaccineDto } from './dto/create-vaccine.dto';
import { UpdateVaccineDto } from './dto/update-vaccine.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Vaccine } from './schema/vaccine.schema';
import { Model } from 'mongoose';

@Injectable()
export class VaccineService {
constructor(@InjectModel(Vaccine.name) private vaccineModel:Model<Vaccine>){}

  create(createVaccineDto: CreateVaccineDto) {

    return this.vaccineModel.create(createVaccineDto)
  }

  findAll() {
    return this.vaccineModel.find()
  }

  findOne(id: string) {
    return this.vaccineModel.findById(id)
  }

  update(id: string, updateVaccineDto: UpdateVaccineDto) {
    return this.vaccineModel.findByIdAndUpdate(id,updateVaccineDto)
  }

  remove(id: string) {
    return this.vaccineModel.deleteOne({_id:id})
  }
}
