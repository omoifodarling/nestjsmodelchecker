import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoDbService } from './mongodb.service';
import { User, UserSchema } from '../users/schemas/users';

@Global()
@Module({
  imports: [MongooseModule],
  providers: [
    MongoDbService,
    { provide: 'DATABASE_CONNECTION', useExisting: MongoDbService },
    {
      provide: 'USER_MODEL',
      inject: [MongoDbService],
      useFactory: (db: MongoDbService) => db.getModel(User.name, UserSchema),
    },
  ],
  exports: [MongoDbService, 'DATABASE_CONNECTION', 'USER_MODEL'],
})
export class MongoDbModule {}
