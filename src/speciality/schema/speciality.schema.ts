import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type AdminDocument = HydratedDocument<Speciality>;
export class Speciality {
    @Prop()
    title:string

    @Prop()
    description:string
}


export const SpecialitySchema = SchemaFactory.createForClass(Speciality);