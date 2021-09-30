import { Module } from '@nestjs/common';
import { RiaQuestionService } from './ria-question.service';
import { RiaQuestionController } from './ria-question.controller';

@Module({
  controllers: [RiaQuestionController],
  providers: [RiaQuestionService]
})
export class RiaQuestionModule {}
