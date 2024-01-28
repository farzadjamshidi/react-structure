import { ApiProperty } from "@nestjs/swagger";
import { BaseModel } from "./base.model";

export class User extends BaseModel
{
    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;
}