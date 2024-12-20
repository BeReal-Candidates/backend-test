import { Url } from "url";

export class Position {
  lat!: number;
  long!: number;
}

export class Size {
  width!: number;
  heigth!: number;
}

export enum Mime {
  IMAGE_JPEG = 'image/jpeg',
  IMAGE_PNG = 'image/png',
}

export class Media {
  url!: Url;
  mime!: Mime;
  size!: Size;
  position!: Position;
  weight!: number;
}
