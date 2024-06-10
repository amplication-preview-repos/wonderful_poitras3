import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type ExplanationCreateInput = {
  question?: QuestionWhereUniqueInput | null;
  text?: string | null;
};
