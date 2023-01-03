import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IMail } from './../interface/mail.interface';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { CreateMailDto } from './dto/create-mail.dto';

@Injectable()
export class MailService {
  constructor(@InjectModel('Mail') private mailModel: SoftDeleteModel<IMail>) {}

  async getAllMail(): Promise<IMail[]> {
    const mailData = await this.mailModel.find().select('from, subject');
    return mailData || [];
  }

  async getDeletedMail(): Promise<IMail[]> {
    const deletedElements = await this.mailModel.findDeleted();
    return deletedElements || [];
  }

  async getOneMail(mailId: string): Promise<IMail> {
    const foundMail = await this.mailModel.findById(mailId).exec();
    return foundMail;
  }

  async saveMail(createdMailDto: CreateMailDto): Promise<IMail> {
    const createdMail = await new this.mailModel(createdMailDto);
    return createdMail.save();
  }

  async deleteMail(mailId: string) {
    await this.mailModel.findByIdAndDelete(mailId);
  }
}
