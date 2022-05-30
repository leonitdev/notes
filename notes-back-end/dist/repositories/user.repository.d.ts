import { Model } from 'mongoose';
import { CreateUserDto } from 'src/modules/users/dto/user.dto';
import { User, UserDocument } from './schema/user.schema';
export declare class UserRepository {
    private readonly model;
    constructor(model: Model<UserDocument>);
    getUsers(query: any): Promise<User[]>;
    createUser(body: CreateUserDto): Promise<User>;
    getUserById(id: string): Promise<User>;
    updateUser(query: any): Promise<User[]>;
    deleteUser(query: any): Promise<User[]>;
}
