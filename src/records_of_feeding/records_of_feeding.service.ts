import { Injectable } from '@nestjs/common';
import { CreateRecordsOfFeedingDto } from './dto/create-records_of_feeding.dto';
import { UpdateRecordsOfFeedingDto } from './dto/update-records_of_feeding.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RecordsOfFeeding } from './schema/records_of_feeding.schema';
import { Model } from 'mongoose';

@Injectable()
export class RecordsOfFeedingService {
  constructor(@InjectModel(RecordsOfFeeding.name) private recordsOfFeddingModel:Model<RecordsOfFeeding>){}



  create(createRecordsOfFeedingDto: CreateRecordsOfFeedingDto) {
    return this.recordsOfFeddingModel.create(createRecordsOfFeedingDto)
  }

  findAll() {
    return this.recordsOfFeddingModel.find().populate("feeding_id")
  }

  findOne(id: string) {
    return this.recordsOfFeddingModel.findById(id)
  }

  update(id: string, updateRecordsOfFeedingDto: UpdateRecordsOfFeedingDto) {
    return this.recordsOfFeddingModel.findByIdAndUpdate(id,updateRecordsOfFeedingDto)
  }

  remove(id: string) {
    return this.recordsOfFeddingModel.deleteOne({_id:id})
  }
}
