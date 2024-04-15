import { Injectable } from '@nestjs/common';
import { CreateMilkProductionDto } from './dto/create-milk_production.dto';
import { UpdateMilkProductionDto } from './dto/update-milk_production.dto';
import { InjectModel } from '@nestjs/mongoose';
import { MilkProduction } from './schema/milk_production.schema';
import { Model } from 'mongoose';


@Injectable()
export class MilkProductionService {
  constructor(@InjectModel(MilkProduction.name) private milkProdModel:Model<MilkProduction>){}

  create(createMilkProductionDto: CreateMilkProductionDto) {
    return this.milkProdModel.create(createMilkProductionDto)
  }

  findAll() {
    return this.milkProdModel.find().populate('animal_id')
  }

  findOne(id: string) {
    return this.milkProdModel.findById(id)
  }

  update(id: string, updateMilkProductionDto: UpdateMilkProductionDto) {
    return this.milkProdModel.findByIdAndUpdate(id,updateMilkProductionDto,{new:true} )
  }

  remove(id: string) {
    return this.milkProdModel.deleteOne({_id:id})
  }
}
