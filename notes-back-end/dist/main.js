"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const configs_1 = require("./infrastructure/configs");
const http_exception_filter_1 = require("./infrastructure/middlewares/exeptions/http-exception.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: new common_1.ConsoleLogger(),
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.setGlobalPrefix('/api/');
    app.enableCors();
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Notes Base Api')
        .setDescription('The Notes API description')
        .setVersion('1.0')
        .addTag('API')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(configs_1.port);
}
bootstrap();
//# sourceMappingURL=main.js.map