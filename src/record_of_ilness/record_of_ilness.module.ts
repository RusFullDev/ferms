import { Module } from '@nestjs/common';
import { RecordOfIlnessService } from './record_of_ilness.service';
import { RecordOfIlnessController } from './record_of_ilness.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RecordOfIlness, RecordOfIlnessSchema } from './schema/record_of_ilness.schema';

@Module({
  imports:[MongooseModule.forFeature([
    {
      name:RecordOfIlness.name,
      schema:RecordOfIlnessSchema
    }
  ])],
  controllers: [RecordOfIlnessController],
  providers: [RecordOfIlnessService],
})
export class RecordOfIlnessModule {}
