import { Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, Mongoose } from "mongoose";




export type AdminDocument = HydratedDocument<Worker>;


export class Worker {
    @Prop()
    name:string
    @Prop()
    age:number
    @Prop()
    experience:string
    @Prop()
    phone_number:string
    @Prop()
    username:string
    @Prop()
    worker_schedule:string[]
    @Prop()
    hashed_token:string
    @Prop({
        type: mongoose.Schema.Types.ObjectId,ref:"Speciality"
    })
    speciality_id:string
}

export const WorkerSchema = SchemaFactory.createForClass(Worker);
