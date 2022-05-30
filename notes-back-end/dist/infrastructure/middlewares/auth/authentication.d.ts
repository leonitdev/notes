import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Response } from 'express';
export declare class AuthenticationMiddleware implements NestMiddleware {
    use(req: any, res: any, next: any): any;
    authorize: (roles: number[]) => (req: any, res: Response, next: NextFunction) => Promise<void>;
}
