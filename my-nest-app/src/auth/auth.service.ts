import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { SignInDto, SignInResponse } from './dto/sign-in.dto';

@Injectable()
export class AuthService
{
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async signIn(signInDto: SignInDto): Promise<{ access_token: string; }>
    {
        const user = await this.usersService.findOne(signInDto.email);
        if (user?.password !== signInDto.password)
        {
            throw new UnauthorizedException();
        }
        const { password, ...payload } = user;

        const response: SignInResponse = {
            access_token: await this.jwtService.signAsync(payload),
        };

        return response;
    }
}