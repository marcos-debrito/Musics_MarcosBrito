import { Injectable } from '@nestjs/common';
import { CreateMusicDTO } from './dto/create-music.dto';
import { Music } from './entities/music.entity';
import { PrismaService } from 'src/database/prisma.servicde';

@Injectable()
export class MusicsService {
  constructor(private prisma: PrismaService) {}

  async create(CreateMusicDTO: CreateMusicDTO) {
    const music = new Music();
    Object.assign(music, { ...CreateMusicDTO });

    await this.prisma.music.create({
      data: {
        id: music.id,
        album: music.album,
        artist: music.artist,
        genre: music.genre,
        name: music.name,
        year: music.year,
        cover_image: music.cover_image,
        music_url: music.music_url,
        userId: CreateMusicDTO.userId,
      },
    });

    return music;
  }

  async findOne(id: string) {
    const music = await this.prisma.music.findFirst({ where: { id } });
    return music;
  }

  async findAll() {
    const musics = await this.prisma.music.findMany();
    return musics;
  }
}
