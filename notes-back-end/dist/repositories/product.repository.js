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
exports.ProductRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mongo_error_constant_1 = require("../infrastructure/constants/mongo-error.constant");
const product_schema_1 = require("./schema/product.schema");
const user_schema_1 = require("./schema/user.schema");
let ProductRepository = class ProductRepository {
    constructor(model) {
        this.model = model;
    }
    async getUserProducts(userId) {
        try {
            const userProducts = await this.model
                .findOne({ _id: userId })
                .select('products')
                .exec();
            return (userProducts === null || userProducts === void 0 ? void 0 : userProducts.products) || [];
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async getProductsCreatedAt(userId, createdAt) {
        try {
            const products = await this.model.aggregate([
                {
                    $match: {
                        _id: userId,
                    },
                },
                {
                    $unwind: '$products',
                },
                {
                    $match: {
                        'products.createdAt': createdAt,
                    },
                },
                {
                    $project: {
                        id: '$_id',
                        productus: 1,
                    },
                },
            ]);
            return products;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async addProduct(userId, body) {
        try {
            const product = new product_schema_1.Product(body);
            await this.model.updateOne({ _id: userId }, { $set: { body } });
            return product;
        }
        catch (error) {
            const { code } = error;
            if (code === mongo_error_constant_1.MongoErrorCode.DUPLICATE_KEY) {
                const message = `This Product already exists`;
                throw new common_1.ConflictException(message);
            }
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async getProductById(id) {
        try {
            const product = await this.model
                .findOne({ 'products._id': id }, {
                products: {
                    $elemMatch: {
                        _id: id,
                    },
                },
            })
                .select('products')
                .exec();
            if (!product) {
                return null;
            }
            return product[0];
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async updateProduct(productId, body) {
        try {
            const product = new product_schema_1.Product(body);
            await this.model.updateOne({ 'products._id': productId }, { $set: { product } });
            return product;
        }
        catch (error) {
            const { code } = error;
            if (code === mongo_error_constant_1.MongoErrorCode.DUPLICATE_KEY) {
                const message = `This Product already exists`;
                throw new common_1.ConflictException(message);
            }
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async deleteProduct(productId) {
        try {
            const product = await this.model
                .findOneAndDelete({
                'products._id': productId,
            }, {
                products: {
                    $elemMatch: {
                        _id: productId,
                    },
                },
            })
                .select('products');
            return product[0];
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
};
ProductRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductRepository);
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=product.repository.js.map