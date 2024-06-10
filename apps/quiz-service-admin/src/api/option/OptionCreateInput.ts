import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type OptionCreateInput = {
  isCorrect?: boolean | null;
  question?: QuestionWhereUniqueInput | null;
  text?: string | null;
};
