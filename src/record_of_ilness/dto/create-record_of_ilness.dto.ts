import mongoose from "mongoose";

export class CreateRecordOfIlnessDto {
    animal_id:mongoose.Schema.Types.ObjectId
    ilness_type:string
    date_disease:string
    medicines:string
    date_treatment:string
    illness_photo:string
    worker_id:mongoose.Schema.Types.ObjectId
}
