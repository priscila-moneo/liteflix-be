import {
  Controller,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
  Get,
  InternalServerErrorException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MoviesService } from './movies.service';
import { CloudinaryService } from 'src/services/cloudinary.service';

@Controller('movies')
export class MoviesController {
  constructor(
    private readonly moviesService: MoviesService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  findAll() {
    return this.moviesService.findAll();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('image'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new InternalServerErrorException('No se subió ninguna imagen');
    }

    try {
      const uploadedImage = await this.cloudinaryService.uploadImage(file);
      return {
        message: 'Imagen subida correctamente',
        url: uploadedImage.secure_url,
      };
    } catch (error) {
      throw new InternalServerErrorException(
        'Error al subir la imagen',
        error.message,
      );
    }
  }
}
