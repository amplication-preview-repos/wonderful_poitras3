import { SortOrder } from "../../util/SortOrder";

export type QuizOrderByInput = {
  chapter?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  subject?: SortOrder;
  title?: SortOrder;
  topic?: SortOrder;
  updatedAt?: SortOrder;
};
