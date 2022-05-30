"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = exports.baseUrl = exports.mongoConnectionString = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const mongoConnectionString = process.env.MONGO_CONNECTION_STRING;
exports.mongoConnectionString = mongoConnectionString;
const port = process.env.PORT;
exports.port = port;
const baseUrl = process.env.BASE_URL;
exports.baseUrl = baseUrl;
//# sourceMappingURL=index.js.map