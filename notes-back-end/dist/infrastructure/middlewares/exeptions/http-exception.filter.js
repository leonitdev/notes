"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus();
        const { stack, message } = exception;
        const messageError = exception === null || exception === void 0 ? void 0 : exception.getResponse();
        const isMessageErrorArray = Array.isArray(messageError === null || messageError === void 0 ? void 0 : messageError.message);
        let formattedMsg = '';
        if (isMessageErrorArray) {
            const objectIndex = parseInt(messageError.message[0].match(/\d+/g));
            const isNestedMessage = messageError.message[0].includes(`.${objectIndex}.`);
            if (isNestedMessage) {
                const err = messageError.message[0].split(`${objectIndex}`);
                formattedMsg = err[1];
            }
            else {
                formattedMsg = messageError.message[0];
            }
        }
        const error = {
            statusCode: status,
            message: Array.isArray(messageError === null || messageError === void 0 ? void 0 : messageError.message) ? formattedMsg : message,
            timestamp: new Date().toISOString(),
            path: request.url,
        };
        if (status >= common_1.HttpStatus.INTERNAL_SERVER_ERROR)
            error.stack = stack;
        response.status(status).json(error);
    }
};
HttpExceptionFilter = __decorate([
    (0, common_1.Catch)(common_1.HttpException)
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;
//# sourceMappingURL=http-exception.filter.js.map