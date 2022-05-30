"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoErrorCode = void 0;
var MongoErrorCode;
(function (MongoErrorCode) {
    MongoErrorCode[MongoErrorCode["OK"] = 0] = "OK";
    MongoErrorCode[MongoErrorCode["INTERNAL_ERROR"] = 1] = "INTERNAL_ERROR";
    MongoErrorCode[MongoErrorCode["BAD_VALUE"] = 2] = "BAD_VALUE";
    MongoErrorCode[MongoErrorCode["DUPLICATE_KEY"] = 11000] = "DUPLICATE_KEY";
    MongoErrorCode[MongoErrorCode["INTERRUPTED"] = 11601] = "INTERRUPTED";
})(MongoErrorCode = exports.MongoErrorCode || (exports.MongoErrorCode = {}));
//# sourceMappingURL=mongo-error.constant.js.map