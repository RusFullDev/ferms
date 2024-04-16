import mongoose, { Date } from "mongoose";

export class CreateRecordsOfFeedingDto {
    date:Date
    consumption:string
    feeding_id:mongoose.Schema.Types.ObjectId
}
