import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(@InjectModel(Movie.name) private movieModel: Model<Movie>) {}

  async create(createMovieDto: CreateMovieDto) {
    const { title, release_date } = createMovieDto;

    const existingMovie = await this.movieModel.findOne({ 
      title, 
      release_date 
    }).exec();
    
    if (existingMovie) {
      throw new ConflictException('Este título ya forma parte de tus películas');
    }

    const createdMovie = new this.movieModel(createMovieDto);
    return createdMovie.save();
  }

  async findAll() {
    return this.movieModel.find().exec();
  }
}
