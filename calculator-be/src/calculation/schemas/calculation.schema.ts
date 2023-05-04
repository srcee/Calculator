import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type CalculationDocument = Calculation & Document;

@Schema()
export class Calculation {
  @Prop()
  id: string;

  @Prop()
  equation: string;

  @Prop()
  result: string;
}

export const CalculationSchema = SchemaFactory.createForClass(Calculation);
