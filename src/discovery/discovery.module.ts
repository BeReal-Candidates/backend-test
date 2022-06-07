import { Module, NestModule } from '@nestjs/common';
import { DiscoveryController } from './discovery.controller';
import { DiscoveryService } from './discovery.service';
import { loadPost } from './post.loader';

@Module({
  controllers: [DiscoveryController],
  providers: [DiscoveryService],
})
export class DiscoveryModule implements NestModule {
  constructor(private service: DiscoveryService) {}
  configure() {
    loadPost(this.service, Number(process.env.NB_POSTS || 1000000));
  }
}
