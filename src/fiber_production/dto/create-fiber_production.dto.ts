import mongoose from "mongoose"

export class CreateFiberProductionDto {
    fiber_yield:string
    shearing_schedule:string
    fiber_quality:string
    animal_id:mongoose.Schema.Types.ObjectId
}
