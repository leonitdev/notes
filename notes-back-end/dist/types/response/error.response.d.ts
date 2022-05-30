export declare class ErrorResponse {
    name: string;
    message: string;
    status: number;
    stack?: any;
    constructor(name: string, message: string, status: number, stack?: any);
}
