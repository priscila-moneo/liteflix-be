import { Controller, Get, Post, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MoviesService } from './movies.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  findAll() {
    return this.moviesService.findAll();
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads', 
        filename: (req, file, cb) => {
          cb(null, file.originalname);  
        },
      }),
      limits: { fileSize: 5 * 1024 * 1024 },
    }),
  )
  uploadFile(@UploadedFile() file) {
    if (!file) {
      return { message: 'No se subió ninguna imagen' };
    }
    return {
      message: 'Imagen subida correctamente',
      file: file,
    };
  }
}
