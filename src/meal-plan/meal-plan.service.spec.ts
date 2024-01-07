import { Test, TestingModule } from '@nestjs/testing';
import { MealPlanService } from './meal-plan.service';

describe('MealPlanService', () => {
  let service: MealPlanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MealPlanService],
    }).compile();

    service = module.get<MealPlanService>(MealPlanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
