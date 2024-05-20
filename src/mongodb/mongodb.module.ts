import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoDbService } from './mongodb.service';

@Global()
@Module({
  imports: [MongooseModule],
  providers: [MongoDbService],
  exports: [MongoDbService],
})
export class MongoDbModule {}
