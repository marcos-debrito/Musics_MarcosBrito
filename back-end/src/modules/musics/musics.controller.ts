import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMusicDTO } from './dto/create-music.dto';
import { MusicsService } from './musics.service';

/* 
  Recebe as chamadas HTTP, executa um 
  serviço e então retorna uma mensagem 
*/
@Controller('musics')
export class MusicsController {
  constructor(private MusicsService: MusicsService) {}

  @Post('')
  create(@Body() CreateMusicDTO: CreateMusicDTO) {
    return this.MusicsService.create(CreateMusicDTO);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.MusicsService.findOne(id);
  }

  @Get('')
  findAll() {
    return this.MusicsService.findAll();
  }
}
