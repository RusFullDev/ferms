import { Injectable } from '@nestjs/common';
import { CreateRecordOfIlnessDto } from './dto/create-record_of_ilness.dto';
import { UpdateRecordOfIlnessDto } from './dto/update-record_of_ilness.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RecordOfIlness } from './schema/record_of_ilness.schema';
import { Model } from 'mongoose';

@Injectable()
export class RecordOfIlnessService {
  constructor(@InjectModel(RecordOfIlness.name) private recordOfIlnessModel:Model<RecordOfIlness>){}
  create(createRecordOfIlnessDto: CreateRecordOfIlnessDto) {
    return this.recordOfIlnessModel.create(createRecordOfIlnessDto)
  }

  findAll() {
    return this.recordOfIlnessModel.find().populate("animal_id").populate("worker_id")
  }

  findOne(id: string) {
    return this.recordOfIlnessModel.findById(id)
  }

  update(id: string, updateRecordOfIlnessDto: UpdateRecordOfIlnessDto) {
    return this.recordOfIlnessModel.findByIdAndUpdate(id,updateRecordOfIlnessDto)
  }

  remove(id:string) {
    return this.recordOfIlnessModel.deleteOne({_id:id})
  }
}
