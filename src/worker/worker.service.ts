import { Injectable } from '@nestjs/common';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { Worker } from './schema/worker.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Speciality } from 'src/speciality/schema/speciality.schema';

@Injectable()
export class WorkerService {
  constructor(@InjectModel(Worker.name) private workerModel:Model<Worker>,
  @InjectModel(Speciality.name) private speciality:Model<Speciality>){}
  create(createWorkerDto: CreateWorkerDto) {
    return 'This action adds a new worker';
  }

  findAll() {
    return this.workerModel.find().populate('speciality_id');
  }

  findOne(id: number) {
    return 
  }

  update(id: number, updateWorkerDto: UpdateWorkerDto) {
    return `This action updates a #${id} worker`;
  }

  remove(id: number) {
    return `This action removes a #${id} worker`;
  }
}
