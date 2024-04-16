import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Animal } from "src/animals/Schema/animal.schema";
import { Worker } from "src/worker/schema/worker.schema";


export type FeedingDocument = HydratedDocument<Feeding>
@Schema({versionKey:false})
export class Feeding {
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:"Animal"})
    animal_id:Animal
    @Prop()
    feeding_schedules:string
    @Prop()
    types_of_feed:string
    @Prop()
    dietary:string
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:"Worker"})
    worker_id:Worker
}
export const FeedingSchema = SchemaFactory.createForClass(Feeding)