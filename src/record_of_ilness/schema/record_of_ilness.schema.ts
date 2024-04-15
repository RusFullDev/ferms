import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Animal } from "src/animals/Schema/animal.schema";
import { Worker } from "src/worker/schema/worker.schema";

export type RecordOfIlnessDocument = HydratedDocument<RecordOfIlness>

@Schema()
export class RecordOfIlness {

@Prop({type:mongoose.Schema.Types.ObjectId,ref:"Animal"})
animal_id:Animal

@Prop()
    ilness_type:string

    @Prop()
    date_disease:string

    @Prop()
    medicines:string

    @Prop()
    date_treatment:string

    @Prop()
    illness_photo:string

    @Prop({type:mongoose.Schema.Types.ObjectId,ref:"Worker"})
    worker_id:Worker
}

export const RecordOfIlnessSchema = SchemaFactory.createForClass(RecordOfIlness)
