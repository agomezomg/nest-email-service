import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UserSchema } from './schema/user.schema';
import { UsersService } from './users/users.service';
import { ConfigModule } from '@nestjs/config';
import { AuthenticationController } from './users/authentication/authentication.controller';
import { AuthenticationService } from './users/authentication/authentication.service';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      'mongodb+srv://agomez-local:ZkALGnbUE8m5MKjs@cluster0.jgaa6.mongodb.net/?retryWrites=true&w=majority',
      { dbName: 'cluster0' },
    ),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    MailModule,
  ],
  controllers: [AppController, UsersController, AuthenticationController],
  providers: [AppService, UsersService, AuthenticationService],
})
export class AppModule {}
