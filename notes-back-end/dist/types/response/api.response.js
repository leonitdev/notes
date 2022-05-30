"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseArray = exports.ResponseObject = exports.CreateResponseObject = exports.BaseResponse = void 0;
class BaseResponse {
    constructor(success, status) {
        this.success = success;
        this.status = status;
    }
}
exports.BaseResponse = BaseResponse;
class CreateResponseObject extends BaseResponse {
    constructor(success, status, link, item) {
        super(success, status);
        this.link = link;
        this.item = item;
    }
}
exports.CreateResponseObject = CreateResponseObject;
class ResponseObject extends BaseResponse {
    constructor(success, status, item) {
        super(success, status);
        this.item = item;
    }
}
exports.ResponseObject = ResponseObject;
class ResponseArray extends BaseResponse {
    constructor(success, status, items, totalCount) {
        super(success, status);
        this.items = items;
        this.totalCount = totalCount;
    }
}
exports.ResponseArray = ResponseArray;
//# sourceMappingURL=api.response.js.map