import { Injectable } from '@nestjs/common';
import { CreateFeedingDto } from './dto/create-feeding.dto';
import { UpdateFeedingDto } from './dto/update-feeding.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Feeding } from './schema/feeding.schema';
import { Model } from 'mongoose';

@Injectable()
export class FeedingService {
  constructor(@InjectModel(Feeding.name) private feddingModel:Model<Feeding>){}

  create(createFeedingDto: CreateFeedingDto) {
    return this.feddingModel.create(createFeedingDto)
  }

  findAll() {
    return this.feddingModel.find().populate('animal_id').populate('worker_id')
  }

  findOne(id: string) {
    return this.feddingModel.findById({id})
  }

  update(id: string, updateFeedingDto: UpdateFeedingDto) {
    return this.feddingModel.findByIdAndUpdate(id,updateFeedingDto)
  }

  remove(id: string) {
    return this.feddingModel.deleteOne({_id:id})
  }
}
