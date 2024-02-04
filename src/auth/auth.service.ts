import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsersService } from 'src/users/users.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pw: string) {
    const user = await this.usersService.findOneByUsername(username);
    const authorized = await compare(pw, user?.password);

    if (!authorized) throw new UnauthorizedException();

    const payload = { username: user.username, sub: user.id };
    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
