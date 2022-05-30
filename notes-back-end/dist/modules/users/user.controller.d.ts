import { Response, Request } from 'express';
import { UserService } from 'src/modules/users/user.service';
import { CreateUserDto } from 'src/modules/users/dto/user.dto';
export declare class UserController {
    private readonly service;
    constructor(service: UserService);
    getUsers(res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
    createUser(res: Response, body: CreateUserDto): Promise<Response<any, Record<string, any>>>;
}
