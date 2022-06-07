import { Media } from './media.dto';

export class Post {
  uuid!: string;
  owner?: string;
  caption?: string;
  frontPic?: Media;
  backPic?: Media;
}
