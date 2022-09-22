import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Grade } from './grades.schema';

export type StudentDocument = Student & Document;

@Schema()
export class Student {
  @Prop()
  strand: string;
  @Prop()
  report_card: Grade[];
}

export const StudentSchema = SchemaFactory.createForClass(Student);
