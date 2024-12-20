import { Injectable } from '@nestjs/common';
import { Post } from 'src/content/post.dto';
import { PageRequest } from '../pagination';

const PAGE_SIZE = Number(process.env.PAGE_SIZE || 10);

@Injectable()
export class DiscoveryService {
  readonly posts: Post[] = [];

  async insert(post: Post): Promise<Post> {
    this.posts.push(post);
    return post;
  }

  async fetchPage(page?: PageRequest): Promise<{
    data: Post[];
    nextCursor: string;
  }> {
    const firstIndex = !page
      ? 0
      : this.posts.findIndex((p) => p.uuid === page.cursor);

    const dataSlice = this.posts.slice(firstIndex, firstIndex + PAGE_SIZE);
    return {
      data: dataSlice,
      nextCursor: dataSlice[dataSlice.length - 1]?.uuid,
    };
  }
}
