import { Document } from 'mongoose';

export interface IMail extends Document {
  readonly to: string;

  readonly from: string;

  readonly subject: string;

  readonly body: string;
}
