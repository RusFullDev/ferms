
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AdminDocument = HydratedDocument<Admin>;

@Schema({versionKey:false})
export class Admin {
  @Prop()
  full_name: string;

  @Prop()
  email: string;

  @Prop()
  phone_number: number;

  @Prop()
  tg_link:string

  @Prop({ required: true })
  hashed_password:string

  @Prop()
  hashed_token:string

  @Prop({default:true})
  is_active:boolean

  @Prop({default:false})
  is_creator:boolean

  @Prop()
  description:string

  @Prop()
  hashed_refresh_token:string
}


export const AdminSchema = SchemaFactory.createForClass(Admin);