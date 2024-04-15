import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Animal } from "src/animals/Schema/animal.schema";


export type FiberProductionDocument = HydratedDocument<FiberProduction>

@Schema({versionKey:false})
export class FiberProduction {
    @Prop()
    fiber_yield:string

    @Prop()
    shearing_schedule:string

    @Prop()
    fiber_quality:string

    @Prop({type:mongoose.Schema.Types.ObjectId,ref:"Animal"})
    animal_id:Animal

}

export const FiberProductionSchema = SchemaFactory.createForClass(FiberProduction)