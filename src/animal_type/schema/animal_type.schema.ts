import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";



export type AnimalTypeDocument = HydratedDocument<AnimalType>;
@Schema({versionKey:false})
export class AnimalType {

@Prop({required:true})
    type_name:string
    
@Prop()
    description:string

}

export const AnimalTypeSchema = SchemaFactory.createForClass(AnimalType);
