import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as users from '../users.json';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await users.find((_user) => _user.email === email);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user) {
    const payload = {
      sub: user.id,
      email: user.email,
      type: 'user'
    };
    return {
      access_token: this.jwtService.sign(payload)
    };
  }
}
