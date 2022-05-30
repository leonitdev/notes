export declare class BaseResponse {
    success: boolean;
    status: number;
    constructor(success: boolean, status: number);
}
export declare class CreateResponseObject<T> extends BaseResponse {
    link?: string;
    item: T;
    constructor(success: boolean, status: number, link: string, item: T);
}
export declare class ResponseObject<T> extends BaseResponse {
    item: T;
    constructor(success: boolean, status: number, item: T);
}
export declare class ResponseArray<T> extends BaseResponse {
    items: T[];
    totalCount?: number;
    constructor(success: boolean, status: number, items: T[], totalCount?: number);
}
