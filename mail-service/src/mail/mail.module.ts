import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MailSchema } from './../schema/mail.schema';
import { MailGateway } from './mail.gateway';
import { MailService } from './mail.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Mail', schema: MailSchema }])],
  providers: [MailGateway, MailService],
})
export class MailModule {}
