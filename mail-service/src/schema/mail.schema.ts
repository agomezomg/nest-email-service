import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Mail {
  @Prop()
  to: string;

  @Prop()
  from: string;

  @Prop()
  subject: string;

  @Prop()
  body: string;
}

export const MailSchema = SchemaFactory.createForClass(Mail);
