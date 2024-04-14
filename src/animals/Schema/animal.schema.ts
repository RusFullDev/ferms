import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose, { HydratedDocument } from "mongoose"
import { AnimalType } from "src/animal_type/schema/animal_type.schema"



export type AnimalDocument = HydratedDocument<Animal>
@Schema({versionKey:false})
export class Animal {

    @Prop({type:mongoose.Schema.Types.ObjectId,ref:"AnimalType"})
    animal_type_id:AnimalType

    @Prop([String])
    photos:string[]
    @Prop()
    unique_id:string
}

export const AnimalSchema = SchemaFactory.createForClass(Animal)