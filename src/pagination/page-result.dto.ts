import { Url } from 'url';

export class PageResult<T> {
  data: T[] = [];
  nextpage?: string;
  nextpageUrl?: Url;
}
