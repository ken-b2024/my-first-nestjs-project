import { Controller, Get, Post, Patch, Put, Delete, Param, Query, Body, Req, Headers, Ip, ParseIntPipe, DefaultValuePipe, ValidationPipe,} from '@nestjs/common';
import { request } from 'express';
import { CreateUserDto } from './DTOs/create-user.dto';
import { GetUsersParamDto } from './DTOs/get-users-param.dto';
import { PatchUserDto } from './DTOs/patch-users.dto';

@Controller('users')
export class UsersController {
    @Get('{/:id}')
    public getUsers(
        @Param() getUsersParamDto: GetUsersParamDto,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    ){
        console.log(getUsersParamDto)
        return "You sent a GET request to users endpoint"; 
    }

    @Post()
    public createUser(
        @Body() createUserDto: CreateUserDto
    ){
        console.log(createUserDto instanceof CreateUserDto)
        return "You sent a POST request to users endpoint"; 
    }

    @Patch()
    public patchUser(
        @Body() patchUserDto: PatchUserDto,
    ){
        return patchUserDto; 
    }
}
