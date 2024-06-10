import { SortOrder } from "../../util/SortOrder";

export type OptionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isCorrect?: SortOrder;
  questionId?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
