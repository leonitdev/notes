import { Response, Request } from 'express';
import { ProductService } from 'src/modules/products/product.service';
import { CreateProductDto } from 'src/modules/products/dto/product.dto';
export declare class ProductController {
    private readonly service;
    constructor(service: ProductService);
    getProducts(res: Response, req: Request, userId: string): Promise<Response<any, Record<string, any>>>;
    addProduct(res: Response, userId: string, body: CreateProductDto): Promise<Response<any, Record<string, any>>>;
}
