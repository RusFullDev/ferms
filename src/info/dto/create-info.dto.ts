import mongoose from "mongoose"

export class CreateInfoDto {
    weight:string
    color:string
    height:string
    breed:string
    gender:string
    birth_or_acquisition:string
    block_id:mongoose.Schema.Types.ObjectId
    animal_id:mongoose.Schema.Types.ObjectId
    parent_id:mongoose.Schema.Types.ObjectId
    
}
