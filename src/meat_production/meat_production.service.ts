import { Injectable } from '@nestjs/common';
import { CreateMeatProductionDto } from './dto/create-meat_production.dto';
import { UpdateMeatProductionDto } from './dto/update-meat_production.dto';
import { InjectModel } from '@nestjs/mongoose';
import { MeatProduction } from './schema/meat_production.schema';
import { Model } from 'mongoose';

@Injectable()
export class MeatProductionService {
  constructor(@InjectModel(MeatProduction.name) private meatProductionModel:Model<MeatProduction>){}
  create(createMeatProductionDto: CreateMeatProductionDto) {
    return this.meatProductionModel.create(createMeatProductionDto)
  }

  findAll() {
    return this.meatProductionModel.find().populate('animal_id')
  }

  findOne(id: string) {
    return this.meatProductionModel.findById(id)
  }

  update(id: string, updateMeatProductionDto: UpdateMeatProductionDto) {
    return this.meatProductionModel.findByIdAndUpdate(id,updateMeatProductionDto)
  }
  remove(id: string) {
    return this.meatProductionModel.findByIdAndDelete({id})
  }
}
