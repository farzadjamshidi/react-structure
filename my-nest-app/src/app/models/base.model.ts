import { ApiProperty } from "@nestjs/swagger";

export class BaseModel
{
    @ApiProperty()
    id: number | string;
}