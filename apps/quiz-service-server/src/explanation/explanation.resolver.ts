import * as graphql from "@nestjs/graphql";
import { ExplanationResolverBase } from "./base/explanation.resolver.base";
import { Explanation } from "./base/Explanation";
import { ExplanationService } from "./explanation.service";

@graphql.Resolver(() => Explanation)
export class ExplanationResolver extends ExplanationResolverBase {
  constructor(protected readonly service: ExplanationService) {
    super(service);
  }
}
