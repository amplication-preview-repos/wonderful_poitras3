import { ExplanationWhereInput } from "./ExplanationWhereInput";
import { ExplanationOrderByInput } from "./ExplanationOrderByInput";

export type ExplanationFindManyArgs = {
  where?: ExplanationWhereInput;
  orderBy?: Array<ExplanationOrderByInput>;
  skip?: number;
  take?: number;
};
