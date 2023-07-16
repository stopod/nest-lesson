import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseFilters,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { AuthGuard } from '@nestjs/passport';

// http://localhost:3000/users
@Controller('users')
// @UseFilters(new HttpExceptionFilter())
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':username')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('username') username: string) {
    return this.usersService.findOne(username);
  }

  @Post()
  // dtoを使って型定義をする...clからsvに送られてくる型
  create(@Body(ValidationPipe) createUser: CreateUserDto) {
    return this.usersService.create(createUser);
  }

  /**
   * validation
   * 1. class-validator class-transformerをinstall
   * 2. @Body()にvalidastionPipeをセット
   * 3. Dtoにclass-validatorからのデコレーターを設定
   */
}
