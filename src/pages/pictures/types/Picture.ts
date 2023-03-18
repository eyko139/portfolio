import { Photo } from "react-photo-album";

export interface Picture extends Photo {
  src: string;
  height: number;
  width: number;
  selected: boolean;
}