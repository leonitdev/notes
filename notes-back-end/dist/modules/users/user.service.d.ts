import { User } from 'src/repositories/schema/user.schema';
import { UserRepository } from 'src/repositories/user.repository';
import { CreateUserDto } from 'src/modules/users/dto/user.dto';
import { CreateResponseObject, ResponseArray } from 'src/types/response/api.response';
export declare class UserService {
    private readonly repository;
    constructor(repository: UserRepository);
    getUsers(query: any): Promise<ResponseArray<User>>;
    createUser(body: CreateUserDto): Promise<CreateResponseObject<User>>;
}
