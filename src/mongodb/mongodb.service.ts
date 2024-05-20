import { Injectable } from '@nestjs/common';
import mongoose, { Connection, Document, Model } from 'mongoose';

@Injectable()
export class MongoDbService {
  private conn: Connection;
  private db_url: string;

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
    //return this.conn.model<T>(modelName, modelSchema);
    return this.conn.model(modelName, modelSchema);
  };
}

/*@Injectable()
export class ModelService<T extends Document> {
  protected model: Model<T>;
  private dbService: MongoDbService;

  constructor(dbService: MongoDbService, modelName: string, modelSchema: mongoose.Schema<T>) {
    this.model = dbService.getConnection().model(modelName, modelSchema);
    this.dbService = dbService;
  }

  getModel = (modelName: string, modelSchema: mongoose.Schema<T>) => {
    //return this.conn.model<T>(modelName, modelSchema);
    return this.dbService.getModel(modelName, modelSchema);
  };
}*/
