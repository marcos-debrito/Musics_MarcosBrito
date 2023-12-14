import { Injectable } from '@nestjs/common';
import { CreateMusicDTO } from './dto/create-music.dto';
import { Music } from './entities/music.entity';

@Injectable()
export class MusicsService {
  private database: Music[] = [];

  async create(CreateMusicDTO: CreateMusicDTO) {
    const music = new Music();
    Object.assign(music, { ...CreateMusicDTO });

    this.database.push(music);

    return music;
  }

  async findOne(id: string) {
    const music = this.database.find((music) => music.id == id);
    return music;
  }
}
