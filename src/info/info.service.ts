import { Inject, Injectable } from '@nestjs/common';
import { CreateInfoDto } from './dto/create-info.dto';
import { UpdateInfoDto } from './dto/update-info.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Info } from './schema/info.schema';
import { Model } from 'mongoose';

@Injectable()
export class InfoService {
  constructor(@InjectModel(Info.name) private infoModel:Model<Info>){}

  create(createInfoDto: CreateInfoDto) {
    return this.infoModel.create(createInfoDto)
  }

  findAll() {
    return this.infoModel.find().populate('block_id').populate('animal_id').populate('parent_id')
  }

  findOne(id: string) {
    return this.infoModel.findById({id})
  }

  update(id: string, updateInfoDto: UpdateInfoDto) {
    return this.infoModel.findOneAndUpdate({id},updateInfoDto)
  }

  remove(id: string) {
    return this.infoModel.findByIdAndDelete({id})

  }
}
