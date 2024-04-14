
import mongoose from "mongoose"

export class CreateAnimalDto {
    animal_type_id:mongoose.Schema.Types.ObjectId
    photos:string[]
    unique_id:string
}
