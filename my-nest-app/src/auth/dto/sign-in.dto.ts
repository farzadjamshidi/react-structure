import { ApiProperty, OmitType } from "@nestjs/swagger";
import { User } from "../../app/models/user.model";

export class SignInDto extends OmitType(User, ['id', 'name'])
{

}

export class SignInResponse
{
    @ApiProperty()
    access_token: string;
}