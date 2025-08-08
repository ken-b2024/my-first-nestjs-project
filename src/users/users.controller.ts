import { Controller, Get, Post, Patch, Put, Delete, Param, Query, Body, Req, Headers, Ip} from '@nestjs/common';
import { request } from 'express';

@Controller('users')
export class UsersController {
    @Get('/:id{/:name}')
    public getUsers(@Param('id') id: any, @Query('limit') limit: any){
        console.log(id)
        console.log(limit)
        return "You sent a GET request to users endpoint"; 
    }

    @Post()
    public createUser(
        @Body('email') request: any,
        @Headers() headers:any,
        @Ip() ip: any,
    ){
        console.log(request)
        console.log(headers)
        console.log(ip)
        return "You sent a POST request to users endpoint"; 
    }
}
