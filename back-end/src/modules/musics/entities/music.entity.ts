import { randomUUID } from 'node:crypto';

export class Music {
  readonly id: string;
  name: string;
  album: string;
  genre: string;
  year: string;
  cover_image: string;
  music_url: string;
  user_id: string;

  constructor() {
    this.id = randomUUID();
  }
}
