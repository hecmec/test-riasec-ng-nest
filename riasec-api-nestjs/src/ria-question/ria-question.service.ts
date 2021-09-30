import { Injectable } from '@nestjs/common';
import { RiaQuestionDto } from './dto/ria-question.dto';

import * as questionDataJson from '../../data/riasec-questions.json';

@Injectable()
export class RiaQuestionService {
  questionList: RiaQuestionDto[] = questionDataJson;

  findAll(): Promise<RiaQuestionDto[]> {
    return Promise.resolve(this.questionList);
  }

  findOne(id: string): Promise<RiaQuestionDto> {
    const foundItem = this.questionList.find((quest) => quest.Id === id);
    if (foundItem) {
      return Promise.resolve(foundItem);
    } else {
      return Promise.reject('No item found');
    }
  }
}
