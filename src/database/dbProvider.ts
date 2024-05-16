// src/database/database.provider.ts
import * as mongoose from 'mongoose';
import { Connection } from 'mongoose';

export const databaseProvider = {
  provide: 'DATABASE_CONNECTION',
  useFactory: async (): Promise<Connection> => {
    return mongoose.createConnection('mongodb://localhost:27017/nest');
  },
};
