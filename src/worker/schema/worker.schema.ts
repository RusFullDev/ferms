import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, Mongoose } from "mongoose";
import { Speciality } from "src/speciality/schema/speciality.schema";




export type WorkerDocument = HydratedDocument<Worker>;

@Schema({versionKey:false})
export class Worker {
    @Prop({required:true})
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
    hashed_password:string

    @Prop([String])
    worker_schedule:string[]

    @Prop()
    hashed_refresh_token:string

    @Prop({default:true})
    is_active:string

    @Prop({
        type: mongoose.Schema.Types.ObjectId,ref:"Speciality"
    })
    speciality_id:Speciality
}

export const WorkerSchema = SchemaFactory.createForClass(Worker);
