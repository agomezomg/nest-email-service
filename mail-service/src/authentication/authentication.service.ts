import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
// import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
// import TokenPayload from './tokenPayload.interface';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly usersService: UsersService,
    // private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  public async getUserFromAuthenticationToken(token: string) {
    // const payload: TokenPayload = this.jwtService.verify(token, {
    //   secret: this.configService.get('JWT_ACCESS_TOKEN_SECRET'),
    // });
    // if (payload.userId) {
    // return this.usersService.getById(payload.userId);
  }
}
