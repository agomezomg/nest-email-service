import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop({ unique: true })
  mail: string;

  @Prop({ nullable: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
