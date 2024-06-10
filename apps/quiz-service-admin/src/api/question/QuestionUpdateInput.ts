import { ExplanationUpdateManyWithoutQuestionsInput } from "./ExplanationUpdateManyWithoutQuestionsInput";
import { OptionUpdateManyWithoutQuestionsInput } from "./OptionUpdateManyWithoutQuestionsInput";
import { QuizWhereUniqueInput } from "../quiz/QuizWhereUniqueInput";

export type QuestionUpdateInput = {
  explanations?: ExplanationUpdateManyWithoutQuestionsInput;
  options?: OptionUpdateManyWithoutQuestionsInput;
  quiz?: QuizWhereUniqueInput | null;
  text?: string | null;
};
