import { Explanation as TExplanation } from "../api/explanation/Explanation";

export const EXPLANATION_TITLE_FIELD = "id";

export const ExplanationTitle = (record: TExplanation): string => {
  return record.id?.toString() || String(record.id);
};
