import { IsString, IsNotEmpty, IsNumber, Min, Max } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  backdrop_path: string;

  @IsString()
  @IsNotEmpty()
  release_date: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(10)
  vote_average: number;
}