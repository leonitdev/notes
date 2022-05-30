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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.User = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const user_dto_1 = require("../../modules/users/dto/user.dto");
let User = class User {
    constructor(dto) {
        const { memberId, firstName, lastName } = dto;
        this.memberId = memberId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.createdAt = new Date();
    }
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id of User',
        type: String,
    }),
    (0, mongoose_1.Prop)({
        type: 'number',
    }),
    __metadata("design:type", Number)
], User.prototype, "memberId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'First Name of User',
        type: String,
    }),
    (0, mongoose_1.Prop)({
        type: 'string',
        minlength: 3,
        maxlength: 120,
    }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Last Name of User',
        type: String,
    }),
    (0, mongoose_1.Prop)({
        type: 'string',
        minlength: 3,
        maxlength: 120,
    }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Creation date of User',
        type: String,
    }),
    (0, mongoose_1.Prop)({
        type: Date,
        default: new Date(),
    }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
User = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false }),
    __metadata("design:paramtypes", [user_dto_1.CreateUserDto])
], User);
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User).set('toJSON', {
    virtuals: true,
    transform: function (doc, ret) {
        delete ret._id;
    },
});
//# sourceMappingURL=user.schema.js.map