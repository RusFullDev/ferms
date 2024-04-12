
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AdminDocument = HydratedDocument<Admin>;

@Schema()
export class Admin {
  @Prop()
  full_name: string;

  @Prop({required:true})
  email: string;

  @Prop({required:true})
  phone_number: number;

  @Prop()
  tg_link:string

  @Prop({required:true})
  hashed_password:string

  @Prop()
  hashed_token:string

  @Prop({default:true})
  is_active:boolean

  @Prop({default:false})
  is_creator:boolean

  @Prop()
  description:string
}

export const AdminSchema = SchemaFactory.createForClass(Admin);