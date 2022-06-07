import { DiscoveryModule } from './discovery.module';
import { Test, TestingModule } from '@nestjs/testing';
import { DiscoveryController } from './discovery.controller';

describe('AppController', () => {
  let controller: DiscoveryController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [DiscoveryModule],
    }).compile();
    await app.init();
    controller = app.get<DiscoveryController>(DiscoveryController);
  });

  it('Working test', () => {
    expect('Hello').toBe('Hello');
  });
});
