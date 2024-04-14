import { PartialType } from '@nestjs/mapped-types';
import { CreateVaccinationHistoryDto } from './create-vaccination_history.dto';

export class UpdateVaccinationHistoryDto extends PartialType(CreateVaccinationHistoryDto) {}
