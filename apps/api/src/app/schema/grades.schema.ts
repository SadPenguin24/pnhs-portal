import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Subject } from './subject.schema';

export type GradeDocument = Grade & Document;

@Schema()
export class Grade {
  @Prop()
  subject: Subject;
  @Prop()
  grade: number;
}

export const GradeSchema = SchemaFactory.createForClass(Grade);
