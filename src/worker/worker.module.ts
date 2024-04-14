import { Module } from '@nestjs/common';
import { WorkerService } from './worker.service';
import { WorkerController } from './worker.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Worker, WorkerSchema } from './schema/worker.schema';
import { Speciality, SpecialitySchema } from 'src/speciality/schema/speciality.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[
    MongooseModule.forFeature([
    {
    name:Worker.name,
    schema:WorkerSchema
},
  {
    name:Speciality.name,
    schema:SpecialitySchema
}
]),
JwtModule.register({})
],
  controllers: [WorkerController],
  providers: [WorkerService],
})
export class WorkerModule {}
