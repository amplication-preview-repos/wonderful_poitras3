import { Module } from "@nestjs/common";
import { ExplanationModuleBase } from "./base/explanation.module.base";
import { ExplanationService } from "./explanation.service";
import { ExplanationController } from "./explanation.controller";
import { ExplanationResolver } from "./explanation.resolver";

@Module({
  imports: [ExplanationModuleBase],
  controllers: [ExplanationController],
  providers: [ExplanationService, ExplanationResolver],
  exports: [ExplanationService],
})
export class ExplanationModule {}
