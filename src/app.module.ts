import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://moneopriscila:A7LLwuAnMWlZBi9R@cluster.cntbh.mongodb.net/liteflix?retryWrites=true&w=majority&appName=Cluster'),
    MoviesModule
  ],
})
export class AppModule {}