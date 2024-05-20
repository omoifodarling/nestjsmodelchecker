// src/database/database.provider.ts
import * as mongoose from 'mongoose';
import { Connection } from 'mongoose';
import { User, UserSchema } from '../users/schemas/users';

export const databaseProvider = {
  provide: 'DATABASE_CONNECTION',
  useFactory: async (): Promise<Connection> => {
    const conn = mongoose.createConnection('mongodb://root:example@localhost:27017');
    return conn;
  },
};

export const DbProviders = [
  {
    provide: 'USER_MODEL',
    useExisting: databaseProvider,
    useFactory: (connection: Connection) => connection.useDb('nest').model(User.name, UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
