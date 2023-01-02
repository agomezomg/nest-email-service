import { Document } from 'mongoose';

export interface IUser extends Document {
  readonly name: string;

  readonly mail: string;

  readonly password: string;
}
