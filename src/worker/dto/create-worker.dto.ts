import mongoose from "mongoose"

export class CreateWorkerDto {
    name:string
    age:number
    experience:string
    phone_number:string
    username:string
    password:string
    confirm_password:string
    worker_schedule:string[]
    speciality_id:mongoose.Schema.Types.ObjectId
}

