import { SortOrder } from "../../util/SortOrder";

export type ExplanationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  questionId?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
