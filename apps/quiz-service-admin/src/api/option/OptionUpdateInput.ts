import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type OptionUpdateInput = {
  isCorrect?: boolean | null;
  question?: QuestionWhereUniqueInput | null;
  text?: string | null;
};
