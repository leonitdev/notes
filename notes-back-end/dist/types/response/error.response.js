"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorResponse = void 0;
class ErrorResponse {
    constructor(name, message, status, stack) {
        this.name = name;
        this.message = message;
        this.status = status;
        this.stack = stack;
    }
}
exports.ErrorResponse = ErrorResponse;
//# sourceMappingURL=error.response.js.map