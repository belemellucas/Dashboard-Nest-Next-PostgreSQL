import { Body, Controller, Get, Post, UnauthorizedException, Headers, UseGuards, Request } from '@nestjs/common';
import { LoginDto } from './login.dto';
import { AuthService } from './auth.service';
import { RefreshJwtGuard } from './refresh.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() data: LoginDto) {
    return this.authService.login(data);
  }

  /* função old
  @Get('check-auth')
  async checkAuth(@Headers('Authorization') authorization: string) {
    const token = authorization.split(' ')[1];
    const isValid = await this.authService.validateToken(token) 
    if (isValid) {
      return { status: 'success'};
    } else {
      throw new UnauthorizedException('Invalid or expired token');
    }
  } */
  
  @UseGuards(RefreshJwtGuard)
  @Post('refresh')
  async refreshToken(@Request() req) {
    return await this.authService.refreshToken(req.user)
  }
}
