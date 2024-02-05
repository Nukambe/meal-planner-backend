import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { MealsService } from 'src/meals/meals.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private mealsService: MealsService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pw: string) {
    const user = await this.usersService.findOneByUsername(username);
    const authorized = await compare(pw, user?.password);

    if (!authorized) throw new UnauthorizedException();

    const payload = { username: user.username, sub: user.id };

    return {
      access_token: await this.jwtService.signAsync(payload),
      username: user.username,
      plan: user.plan,
      templates: user.templates,
      meals: await this.mealsService.getMealsFromDb(),
    };
  }
}
