import { Test, TestingModule } from '@nestjs/testing';
import { RestoranService } from './restoran.service';

describe('RestoranService', () => {
  let service: RestoranService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestoranService],
    }).compile();

    service = module.get<RestoranService>(RestoranService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
