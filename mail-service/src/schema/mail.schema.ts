import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Mail {
  @Prop({
    required: [true, 'Recipient is required'],
  })
  to: string;

  @Prop({
    required: [true, 'Sender is required'],
  })
  from: string;

  @Prop()
  subject: string;

  @Prop({
    required: [true, 'Email body is required'],
  })
  body: string;
}

export const MailSchema = SchemaFactory.createForClass(Mail);
