import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class UserDto{
    @IsString()
    @IsNotEmpty()
    public name : string;

    @IsString()
    @IsNotEmpty()
    public age : string;

    @IsString()
    @IsNotEmpty()
    public gender : string;
}