import { ProductRepository } from 'src/repositories/product.repository';
import { Product } from 'src/repositories/schema/product.schema';
import { CreateProductDto } from 'src/modules/products/dto/product.dto';
import { CreateResponseObject, ResponseArray } from 'src/types/response/api.response';
export declare class ProductService {
    private readonly repository;
    constructor(repository: ProductRepository);
    getProducts(userId: string): Promise<ResponseArray<Product>>;
    addProduct(userId: string, body: CreateProductDto): Promise<CreateResponseObject<Product>>;
}
