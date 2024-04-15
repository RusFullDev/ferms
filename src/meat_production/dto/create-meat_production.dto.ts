import mongoose, { Schema } from "mongoose"

export class CreateMeatProductionDto {
    meat_yield:string
    slaughter_date:string
    shearing_schedule:string
    animal_id:mongoose.Schema.Types.ObjectId
}
