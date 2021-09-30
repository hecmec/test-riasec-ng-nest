import { PartialType } from '@nestjs/mapped-types';
import { CreateRiaQuestionDto } from './create-ria-question.dto';

export class UpdateRiaQuestionDto extends PartialType(CreateRiaQuestionDto) {}
