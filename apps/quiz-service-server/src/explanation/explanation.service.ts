import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExplanationServiceBase } from "./base/explanation.service.base";

@Injectable()
export class ExplanationService extends ExplanationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
