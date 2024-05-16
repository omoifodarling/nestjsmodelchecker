import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CheckResultDocument = HydratedDocument<CheckResult>;

@Schema()
export class CheckResult {
  @Prop()
  dataFileUrl: string;
  @Prop()
  createdBy: string;
  @Prop()
  createdAt: string;
  @Prop()
  lastName: string;
  @Prop()
  projectId: string;
  @Prop()
  checkId: string;
}

export const CheckResultSchema = SchemaFactory.createForClass(CheckResult);
