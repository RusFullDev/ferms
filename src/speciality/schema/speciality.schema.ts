import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type SpecDocument = HydratedDocument<Speciality>;
@Schema({versionKey:false})
export class Speciality {
    @Prop({required:true})
    title:string

    @Prop()
    description:string
}


export const SpecialitySchema = SchemaFactory.createForClass(Speciality);