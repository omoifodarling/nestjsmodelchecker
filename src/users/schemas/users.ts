import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  constructor(userId: string, username: string, pass: string, email: string) {
    this.userId = userId;
    this.email = email;
    this.username = username;
    this.password = pass;
  }

  @Prop({ required: true, message: 'username is required' })
  username: string;
  @Prop()
  name: string;
  @Prop()
  accessToken: string;
  @Prop({ required: true, message: 'email is required' })
  email: string;
  @Prop()
  firstName: string;
  @Prop()
  lastName: string;
  @Prop({ required: true, message: 'password is required' })
  password: string;
  @Prop()
  userId: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
