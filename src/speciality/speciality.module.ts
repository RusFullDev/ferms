import { Module } from '@nestjs/common';
import { SpecialityService } from './speciality.service';
import { SpecialityController } from './speciality.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Speciality, SpecialitySchema } from './schema/speciality.schema';

@Module({
  imports:[MongooseModule.forFeature(
    [{
    name:Speciality.name,
    schema:SpecialitySchema,
  }])
],
  controllers: [SpecialityController],
  providers: [SpecialityService],
  exports:[SpecialityModule]
})
export class SpecialityModule {}
