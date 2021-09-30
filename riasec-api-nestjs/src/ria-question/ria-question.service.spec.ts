import { Test, TestingModule } from '@nestjs/testing';
import { RiaQuestionService } from './ria-question.service';

describe('RiaQuestionService', () => {
  let service: RiaQuestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RiaQuestionService],
    }).compile();

    service = module.get<RiaQuestionService>(RiaQuestionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
