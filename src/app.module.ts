import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MoviesModule,
    MongooseModule.forRootAsync({
      useFactory: async () => {
        try {
          const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster.cntbh.mongodb.net/liteflix?retryWrites=true&w=majority&appName=Cluster`;
          return { uri };
        } catch (error) {
          console.error("Error connecting to MongoDB:", error);
        }
      },
    }),
  ],
})
export class AppModule {}
