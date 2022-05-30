import { Model } from 'mongoose';
import { CreateProductDto, UpdateProductDto } from 'src/modules/products/dto/product.dto';
import { Product } from './schema/product.schema';
import { User, UserDocument } from './schema/user.schema';
export declare class ProductRepository {
    private readonly model;
    constructor(model: Model<UserDocument>);
    getUserProducts(userId: string): Promise<Product[]>;
    getProductsCreatedAt(userId: string, createdAt: string): Promise<User[]>;
    addProduct(userId: string, body: CreateProductDto): Promise<Product>;
    getProductById(id: string): Promise<Product>;
    updateProduct(productId: string, body: UpdateProductDto): Promise<Product>;
    deleteProduct(productId: string): Promise<Product>;
}
