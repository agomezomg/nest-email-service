import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailGateway } from './mail.gateway';

@Module({
  providers: [MailGateway, MailService]
})
export class MailModule {}
