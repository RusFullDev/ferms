import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Feeding } from "src/feeding/schema/feeding.schema";


export type RecordsOfFeedingDocument = HydratedDocument<RecordsOfFeeding>
@Schema({versionKey:false})
export class RecordsOfFeeding {
    @Prop()
    date:Date
    @Prop()
    consumption:string
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:"Feeding"})
    feeding_id:Feeding
}
export const RecordsOfFeedingSchema = SchemaFactory.createForClass(RecordsOfFeeding)