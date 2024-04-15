import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Animal } from './Schema/animal.schema';
import { Model } from 'mongoose';
import{v4} from "uuid"
@Injectable()
export class AnimalsService {
  constructor(@InjectModel(Animal.name) private animalModel:Model<Animal>){}

  create(createAnimalDto: CreateAnimalDto) {
    const unique_id = v4()
    return this.animalModel.create({...createAnimalDto,unique_id})
  }

  findAll() {
    return this.animalModel.find().populate('animal_type_id')
  }

  findOne(id: string) {
    return this.animalModel.findById(id)
  }

  update(id: string, updateAnimalDto: UpdateAnimalDto) {
    return this.animalModel.findByIdAndUpdate(id,updateAnimalDto,{new:true})
  }

  remove(id: string) {
    return this.animalModel.deleteOne({_id:id})
  }
}
