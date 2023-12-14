import { PartialType } from '@nestjs/mapped-types';
import { CreateMusicDTO } from './create-music.dto';

export class UpdateMusicDto extends PartialType(CreateMusicDTO) {}
