import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Animal } from "src/animals/Schema/animal.schema";


export type MeatProductionDocument = HydratedDocument<MeatProduction>

@Schema({versionKey:false})
export class MeatProduction {
    @Prop()
    meat_yield:string
    @Prop()
    slaughter_date:string
    @Prop()
    shearing_schedule:string
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:"Animal"})
    animal_id:Animal
}

export const MeatProductionSchema = SchemaFactory.createForClass(MeatProduction)
