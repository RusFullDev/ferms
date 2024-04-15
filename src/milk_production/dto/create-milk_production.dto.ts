import mongoose from "mongoose"
export class CreateMilkProductionDto {
    milk_yield:string
    milk_schedule:string
    milk_quality:string
    animal_id:mongoose.Schema.Types.ObjectId
}
