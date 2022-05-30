/// <reference types="mongoose" />
import { CreateProductDto } from 'src/modules/products/dto/product.dto';
export declare type ProductDocument = Product & Document;
export declare class Product {
    id: string;
    name: string;
    price: number;
    createdAt: Date;
    constructor(dto: CreateProductDto);
}
export declare const ProductSchema: import("mongoose").Schema<import("mongoose").Document<Product, any, any>, import("mongoose").Model<import("mongoose").Document<Product, any, any>, any, any, any>, any>;
