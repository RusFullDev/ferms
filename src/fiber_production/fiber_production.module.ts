import { Module } from '@nestjs/common';
import { FiberProductionService } from './fiber_production.service';
import { FiberProductionController } from './fiber_production.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FiberProduction, FiberProductionSchema } from './Schema/fiber_production.schema';

@Module({
  imports:[MongooseModule.forFeature([
    {
      name:FiberProduction.name,
      schema:FiberProductionSchema
    }
  ])],
  controllers: [FiberProductionController],
  providers: [FiberProductionService],
})
export class FiberProductionModule {}
