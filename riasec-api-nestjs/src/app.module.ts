import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RiaQuestionModule } from './ria-question/ria-question.module';

@Module({
  imports: [RiaQuestionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
