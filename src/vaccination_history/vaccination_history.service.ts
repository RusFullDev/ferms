import { Injectable } from '@nestjs/common';
import { CreateVaccinationHistoryDto } from './dto/create-vaccination_history.dto';
import { UpdateVaccinationHistoryDto } from './dto/update-vaccination_history.dto';
import { InjectModel } from '@nestjs/mongoose';
import { VaccinationHistory } from './schema/vaccination_history.schema';
import { Model } from 'mongoose';

@Injectable()
export class VaccinationHistoryService {
  constructor(@InjectModel(VaccinationHistory.name) private vaccinationHistoryModel:Model<VaccinationHistory>){}
  create(createVaccinationHistoryDto: CreateVaccinationHistoryDto) {
    return this.vaccinationHistoryModel.create(createVaccinationHistoryDto)
  }

  async findAll() {
    const findVacHistory = await this.vaccinationHistoryModel.find()
    .populate('animal_id')
    .populate('vaccine_id')
    .populate('worker_id')

    return findVacHistory
  }

  findOne(id: string) {
    return this.vaccinationHistoryModel.findById(id)
  }
  update(id: string, updateVaccinationHistoryDto: UpdateVaccinationHistoryDto) {
    return this.vaccinationHistoryModel.findByIdAndUpdate(id,updateVaccinationHistoryDto)
  }

  remove(id: string) {
    return this.vaccinationHistoryModel.deleteOne({_id:id})
  }
}
