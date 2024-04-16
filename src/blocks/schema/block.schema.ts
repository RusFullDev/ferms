import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type BlockDocument = HydratedDocument<Block>

@Schema({versionKey:false})
export class Block {
    @Prop()
    number:number
    @Prop()
    description:string
}

export const BlockSchema = SchemaFactory.createForClass(Block)
