import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type ExplanationUpdateInput = {
  question?: QuestionWhereUniqueInput | null;
  text?: string | null;
};
