import { Injectable, Scope } from '@nestjs/common';
import mongoose, { Connection } from 'mongoose';

@Injectable({ scope: Scope.DEFAULT })
export class MongoDbService {
  private readonly conn: Connection;
  private readonly db_url: string;

  constructor() {
    this.db_url = process.env.MONGODB_URI ?? 'mongodb://root:example@localhost:27017';
    this.conn = mongoose.createConnection(this.db_url);
  }

  getConnection = () => {
    return this.conn;
  };

  getDbUrl = () => {
    return this.db_url;
  };

  getModel = (modelName: string, modelSchema: mongoose.Schema) => {
    return this.conn.model(modelName, modelSchema);
  };
}
