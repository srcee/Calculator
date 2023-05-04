"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculationModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const calculation_schema_1 = require("./schemas/calculation.schema");
const calculation_service_1 = require("./calculation.service");
const calculation_controller_1 = require("./calculation.controller");
const calculation_repository_1 = require("./calculation.repository");
let CalculationModule = class CalculationModule {
};
CalculationModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: calculation_schema_1.Calculation.name, schema: calculation_schema_1.CalculationSchema }])],
        providers: [calculation_service_1.CalculationService, calculation_repository_1.CalculationRepository],
        controllers: [calculation_controller_1.CalculationController],
    })
], CalculationModule);
exports.CalculationModule = CalculationModule;
//# sourceMappingURL=calculation.module.js.map