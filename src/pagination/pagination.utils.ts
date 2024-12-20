import { PageRequest } from './page-request.dto';

export const toPageToken = (pageResquest?: PageRequest): string =>
  pageResquest
    ? Buffer.from(JSON.stringify(pageResquest)).toString('base64')
    : undefined;
export const fromPageToken = (token?: string): PageRequest => {
  try {
    return token
      ? JSON.parse(Buffer.from(token, 'base64').toString('ascii'))
      : undefined;
  } catch (error) {
    return undefined;
  }
};
