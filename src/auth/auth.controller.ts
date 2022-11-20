import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('local/signin')
  siginLocal(@Body() dto: AuthDto) {
    return this.authService.siginLocal(dto);
  }
  @Post('local/signup')
  signupLocal(@Body() dto: AuthDto) {
    return this.authService.signupLocal(dto);
  }
}
