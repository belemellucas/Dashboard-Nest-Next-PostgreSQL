"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: 'http://54.144.36.232:3000',
        credentials: true,
    });
    await app.listen(8000);
}
bootstrap();
//# sourceMappingURL=main.js.map