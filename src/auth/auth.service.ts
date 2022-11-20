import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as users from '../users.json';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  siginLocal(dto: AuthDto) {
    console.log(dto);
    const user = users.find((_user) => _user.email === dto.email);
    if (!user) throw new UnauthorizedException('Credentials incorrect');
    if (user.password !== dto.password) {
      throw new UnauthorizedException('Credentials incorrect');
    }
    return user;
  }

  signupLocal(dto: AuthDto) {
    return 1;
  }
}
