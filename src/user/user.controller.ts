import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { get } from 'http';
import { UserDto } from './user.dto';
import { User } from './user.schema';
import { UserService } from './user.service';

@Controller('api')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('healthcheck')
  healthCheck() {
    return HttpStatus.OK;
  }

  @Post('create')
  createUser(@Body() userDto: UserDto): Promise<User> {
    return this.userService.createUser(userDto);
  }

  @Get('getAll')
  readAllUser(): Promise<User[]> {
    return this.userService.readAllUser();
  }

  @Put('/:id')
  updateUser(@Param('id') id, @Body() userDto: UserDto): Promise<User> {
    return this.userService.updateUser(id, userDto);
  }

  @Get('/:id')
  readUserById(@Param('id') id): Promise<User> {
    return this.userService.readUserById(id);
  }

  @Delete('/:id')
  delete(@Param('id') id): Promise<any> {
    return this.userService.deleteUser(id);
  }
}
