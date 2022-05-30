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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = exports.Product = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const product_dto_1 = require("src/modules/products/dto/product.dto");
let Product = class Product {
    constructor(dto) {
        const { name, price } = dto;
        this.name = name;
        this.price = price;
        this.createdAt = new Date();
    }
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Product.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: 'string',
        minlength: 3,
        maxlength: 120,
    }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: 'number',
    }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Date,
        default: new Date(),
    }),
    __metadata("design:type", Date)
], Product.prototype, "createdAt", void 0);
Product = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false }),
    __metadata("design:paramtypes", [typeof (_a = typeof product_dto_1.CreateProductDto !== "undefined" && product_dto_1.CreateProductDto) === "function" ? _a : Object])
], Product);
exports.Product = Product;
exports.ProductSchema = mongoose_1.SchemaFactory.createForClass(Product).set('toJSON', {
    virtuals: true,
    transform: function (doc, ret) {
        delete ret._id;
    },
});
//# sourceMappingURL=product.schema.js.map