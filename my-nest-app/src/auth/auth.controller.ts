import
{
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards
} from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { SignInDto, SignInResponse } from './dto/sign-in.dto';
import { Public } from './is-public.decorator';

@ApiTags('auth')
@Controller('auth')
export class AuthController
{
    constructor(private authService: AuthService) { }

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    @ApiCreatedResponse({ type: SignInResponse })
    signIn(@Body() signInDto: SignInDto): Promise<SignInResponse>
    {
        return this.authService.signIn(signInDto);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req: any)
    {
        return req.user;
    }
}