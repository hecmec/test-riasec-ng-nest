import { Controller, Get, Param } from '@nestjs/common';
import { RiaQuestionService } from './ria-question.service';
import { RiaQuestionDto } from './dto/ria-question.dto';

@Controller('riaquestions')
export class RiaQuestionController {
  constructor(private readonly riaQuestionService: RiaQuestionService) {}

  @Get()
  findAll(): Promise<RiaQuestionDto[]> {
    return this.riaQuestionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<RiaQuestionDto> {
    return this.riaQuestionService.findOne(id);
  }
}
