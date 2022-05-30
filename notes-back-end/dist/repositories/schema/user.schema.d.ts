/// <reference types="mongoose" />
import { CreateUserDto } from 'src/modules/users/dto/user.dto';
export declare type UserDocument = User & Document;
export declare class User {
    id: string;
    memberId: number;
    firstName: string;
    lastName: string;
    createdAt: Date;
    constructor(dto: CreateUserDto);
}
export declare const UserSchema: import("mongoose").Schema<import("mongoose").Document<User, any, any>, import("mongoose").Model<import("mongoose").Document<User, any, any>, any, any, any>, any>;
