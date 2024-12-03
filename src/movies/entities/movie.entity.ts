import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Movie extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  backdrop_path: string;

  @Prop({ required: true })
  release_date: string;

  @Prop({ required: true })
  vote_average: number;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);

export interface Movie {
  id: number; 
  title: string;
  release_date: string;
  backdrop_path: string;
  vote_average: number;
}
