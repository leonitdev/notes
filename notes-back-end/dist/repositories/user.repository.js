"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mongo_error_constant_1 = require("../infrastructure/constants/mongo-error.constant");
const user_schema_1 = require("./schema/user.schema");
let UserRepository = class UserRepository {
    constructor(model) {
        this.model = model;
    }
    async getUsers(query) {
        try {
            return this.model.find(query).exec();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async createUser(body) {
        try {
            const user = new user_schema_1.User(body);
            const item = new this.model(user);
            item.save();
            return item;
        }
        catch (error) {
            const { code } = error;
            if (code === mongo_error_constant_1.MongoErrorCode.DUPLICATE_KEY) {
                const message = `This User already exists`;
                throw new common_1.ConflictException(message);
            }
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async getUserById(id) {
        try {
            return this.model.findOne({ _id: id }).exec();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async updateUser(query) {
        try {
            return this.model.find(query).exec();
        }
        catch (error) {
            const { code } = error;
            if (code === mongo_error_constant_1.MongoErrorCode.DUPLICATE_KEY) {
                const message = `This User already exists`;
                throw new common_1.ConflictException(message);
            }
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async deleteUser(query) {
        try {
            return this.model.find(query).exec();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
};
UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map