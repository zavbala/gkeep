import { PALETTE } from 'lib/constant';

export interface Note {
  id: string;
  title: string;
  content: string;
  color: string;
  status: boolean;
  archived: boolean;
  pinned: boolean;
}

type Palette = typeof PALETTE['light'];

export type Colors = keyof Palette;
