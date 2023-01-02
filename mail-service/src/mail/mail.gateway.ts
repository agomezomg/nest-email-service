import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { NestGateway } from '@nestjs/websockets/interfaces/nest-gateway.interface';
import { MailService } from './mail.service';
import { Bind, Body } from '@nestjs/common';
import { CreateMailDto } from './dto/create-mail.dto';

@WebSocketGateway(3001)
export class MailGateway implements NestGateway {
  constructor(private mailService: MailService) {}

  afterInit?: (server: any) => void;

  handleConnection(socket: any) {
    // const query = socket.handshake.query;
    process.nextTick(async () => {
      socket.emit('allMails', await this.mailService.getAllMail());
    });
  }

  handleDisconnect(socket: any) {
    console.log('Disconnect', socket);
  }

  @Bind(MessageBody(), ConnectedSocket())
  @SubscribeMessage('mail')
  async handleNewMessage(@Body() createMailDto: CreateMailDto, sender: any) {
    const mail = await this.mailService.saveMail(createMailDto);
    sender.emit('newMail', mail);
    sender.broadcast.emit('newMail', mail);
  }
}
