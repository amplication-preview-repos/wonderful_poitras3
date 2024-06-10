import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ExplanationService } from "./explanation.service";
import { ExplanationControllerBase } from "./base/explanation.controller.base";

@swagger.ApiTags("explanations")
@common.Controller("explanations")
export class ExplanationController extends ExplanationControllerBase {
  constructor(protected readonly service: ExplanationService) {
    super(service);
  }
}
