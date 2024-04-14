import mongoose, { Date } from "mongoose"

export class CreateVaccinationHistoryDto {
    animal_id:mongoose.Schema.Types.ObjectId
    vaccine_id:mongoose.Schema.Types.ObjectId
    vaccinated_date:Date
    next_vaccination_date:string
    vaccination_photo:string
    worker_id:mongoose.Schema.Types.ObjectId
}
