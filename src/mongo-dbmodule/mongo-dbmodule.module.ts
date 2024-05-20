import { Global, Injectable, Module, Scope } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import mongoose, { Connection, Schema, Document, Model } from 'mongoose';

@Injectable({ scope: Scope.DEFAULT })
export abstract class MongoDbService<T extends Document> {
  private readonly conn: Connection;
  private readonly db_url: string;
  protected model: Model<T>;
  constructor(model: Model<T>) {
    this.model = model;
    this.db_url = process.env.MONGODB_URI ?? 'mongodb://root:example@localhost:27017';
    this.conn = mongoose.createConnection(this.db_url);
  }

  getConnection = () => {
    return this.conn;
  };

  getDbUrl = () => {
    return this.db_url;
  };

  getModel = (modelName: string, modelSchema: Schema) => {
    return this.conn.model(modelName, modelSchema);
  };
}

@Global()
@Module({
  imports: [MongooseModule],
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useExisting: MongoDbService,
    },
  ],
})
export class MongoDbModule {}
