import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Animal } from "src/animals/Schema/animal.schema";
import { Vaccine } from "src/vaccine/schema/vaccine.schema";
import { Worker } from "src/worker/schema/worker.schema";


export type VaccinationHistoryDocument = HydratedDocument<VaccinationHistory>

@Schema({versionKey:false})
export class VaccinationHistory {
    
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:"Animal"})
    animal_id:Animal

    @Prop({type:mongoose.Schema.Types.ObjectId,ref:"Vaccine"})
    vaccine_id:Vaccine

    @Prop()
    vaccinated_date:Date

    @Prop()
    next_vaccination_date:string

    @Prop()
    vaccination_photo:string

@Prop({type:mongoose.Schema.Types.ObjectId,ref:"Worker"})
    worker_id:Worker
}

export const VaccinationHistorySchema = SchemaFactory.createForClass(VaccinationHistory)