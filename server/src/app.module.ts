import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  exports: [],
  controllers: [],
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    MongooseModule.forRoot(
      'mongodb+srv://manat:12345@space.mdyey.mongodb.net/spotify?retryWrites=true&w=majority',
    ),
    TrackModule,
    FileModule,
  ],
  providers: [],
})
export class AppModule {}
