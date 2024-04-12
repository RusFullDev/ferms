import { Module } from '@nestjs/common';
import { WorkerService } from './worker.service';
import { WorkerController } from './worker.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Worker, WorkerSchema } from './schema/worker.schema';
import { Speciality, SpecialitySchema } from 'src/speciality/schema/speciality.schema';

@Module({
  imports:[MongooseModule.forFeature([{
    name:Worker.name,
    schema:WorkerSchema
  },{
    name:Speciality.name,
    schema:SpecialitySchema
  }])],
  controllers: [WorkerController],
  providers: [WorkerService],
})
export class WorkerModule {}
