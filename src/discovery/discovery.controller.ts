import { Controller, Get, Injectable, Post, Query } from '@nestjs/common';
import { DiscoveryService } from './discovery.service';
import { Post as PostData } from '../content';
import { PageResult, fromPageToken, toPageToken } from '../pagination';

@Injectable()
@Controller('/discovery')
export class DiscoveryController {
  constructor(private readonly discoveryService: DiscoveryService) {}

  @Get()
  async fetchDiscovery(
    @Query('page') page?: string,
  ): Promise<PageResult<PostData>> {
    const pageRequest = fromPageToken(page);
    const dataPage = await this.discoveryService.fetchPage(pageRequest);
    return {
      data: dataPage.data,
      nextpage: toPageToken({ cursor: dataPage.nextCursor }),
    };
  }

  @Post()
  async postData(post: PostData): Promise<PostData> {
    return this.discoveryService.insert(post);
  }
}
