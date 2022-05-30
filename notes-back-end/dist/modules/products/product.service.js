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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const product_repository_1 = require("../../repositories/product.repository");
const api_response_1 = require("../../types/response/api.response");
let ProductService = class ProductService {
    constructor(repository) {
        this.repository = repository;
    }
    async getProducts(userId) {
        const products = await this.repository.getUserProducts(userId);
        return new api_response_1.ResponseArray(true, common_1.HttpStatus.OK, products);
    }
    async addProduct(userId, body) {
        const product = await this.repository.addProduct(userId, body);
        return new api_response_1.CreateResponseObject(true, common_1.HttpStatus.CREATED, `urlLink/${product.id}`, product);
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_repository_1.ProductRepository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map