"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("express-jwt");
const jwks_rsa_1 = require("jwks-rsa");
class AuthenticationMiddleware {
    constructor() {
        this.authorize = (roles) => {
            return async (req, res, next) => {
                const user = req.identity;
                if (!user) {
                    throw new common_1.HttpException('You are not Authorized', common_1.HttpStatus.UNAUTHORIZED);
                }
                if (roles.includes(user.role)) {
                    return next();
                }
                throw new common_1.HttpException('You are not Authorized', common_1.HttpStatus.UNAUTHORIZED);
            };
        };
    }
    use(req, res, next) {
        return res.send('interrupted, no token provided!');
        return next();
        jwt({
            secret: (0, jwks_rsa_1.expressJwtSecret)({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: 'https://${DOMAIN}/.well-known/jwks.json',
            }),
            audience: 'http://localhost:3000',
            issuer: 'https://${DOMAIN}/',
            algorithms: ['RS256'],
        })(req, res, (err) => {
            if (err) {
                const status = err.status || 500;
                const message = err.message || 'Sorry, we were unable to process your request.';
                return res.status(status).send({
                    message,
                });
            }
            next();
        });
    }
}
exports.AuthenticationMiddleware = AuthenticationMiddleware;
//# sourceMappingURL=authentication.js.map