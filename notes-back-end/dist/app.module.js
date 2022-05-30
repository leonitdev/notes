"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const helmet_1 = require("helmet");
const configs_1 = require("./infrastructure/configs");
const note_module_1 = require("./modules/notes/note.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(helmet_1.default)
            .forRoutes({ path: '*', method: common_1.RequestMethod.ALL })
            .apply()
            .forRoutes({ path: 'v1/notes', method: common_1.RequestMethod.POST }, { path: 'v1/notes/:id', method: common_1.RequestMethod.GET }, { path: 'v1/notes', method: common_1.RequestMethod.GET }, { path: 'v1/notes', method: common_1.RequestMethod.PUT }, { path: 'v1/notes/:id', method: common_1.RequestMethod.DELETE });
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(configs_1.mongoConnectionString, {
                retryWrites: true,
                retryReads: true,
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            note_module_1.NoteModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map