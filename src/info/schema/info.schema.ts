import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Animal } from "src/animals/Schema/animal.schema";
import { Block } from "src/blocks/schema/block.schema";

export type InfoDocument = HydratedDocument<Info>
@Schema({versionKey:false})
export class Info {
    @Prop()
    weight:string
    @Prop()
    color:string
    @Prop()
    height:string
    @Prop()
    breed:string
    @Prop()
    gender:string
    @Prop()
    birth_or_acquisition:string
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:"Block"})
    block_id:Block
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:"Animal"})
    animal_id:Animal
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:"Animal" })
    parent_id:Animal
}
export const InfoSchema = SchemaFactory.createForClass(Info)
