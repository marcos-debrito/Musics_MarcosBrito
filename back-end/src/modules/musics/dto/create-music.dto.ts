/* 
Faz as tipagens e validações! 

DTO -> Data Transfer Object
*/

export class CreateMusicDTO {
  name: string;
  album: string;
  genre: string;
  year: string;
  cover_image: string | null;
  music_url: string | null;
  user_id?: string;
}
