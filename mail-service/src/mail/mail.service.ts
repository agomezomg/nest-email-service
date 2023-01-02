import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IMail } from './../interface/mail.interface';
// import { defaultApp } from '../auth/firebaseAdmin';
import { Model } from 'mongoose';
import { CreateMailDto } from './dto/create-mail.dto';

@Injectable()
export class MailService {
  constructor(@InjectModel('Mail') private mailModel: Model<IMail>) {}

  async getAllMail(): Promise<IMail[]> {
    const mailData = await this.mailModel.find();
    return mailData || [];
  }

  async saveMail(createdMailDto: CreateMailDto): Promise<IMail> {
    const createdMail = await new this.mailModel(createdMailDto);
    return createdMail.save();
  }
}
