import { Test, TestingModule } from '@nestjs/testing';
import { RiaQuestionController } from './ria-question.controller';
import { RiaQuestionService } from './ria-question.service';

describe('RiaQuestionController', () => {
  let controller: RiaQuestionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RiaQuestionController],
      providers: [RiaQuestionService],
    }).compile();

    controller = module.get<RiaQuestionController>(RiaQuestionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
