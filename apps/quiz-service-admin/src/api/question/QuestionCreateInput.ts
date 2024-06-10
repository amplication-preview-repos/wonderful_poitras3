import { ExplanationCreateNestedManyWithoutQuestionsInput } from "./ExplanationCreateNestedManyWithoutQuestionsInput";
import { OptionCreateNestedManyWithoutQuestionsInput } from "./OptionCreateNestedManyWithoutQuestionsInput";
import { QuizWhereUniqueInput } from "../quiz/QuizWhereUniqueInput";

export type QuestionCreateInput = {
  explanations?: ExplanationCreateNestedManyWithoutQuestionsInput;
  options?: OptionCreateNestedManyWithoutQuestionsInput;
  quiz?: QuizWhereUniqueInput | null;
  text?: string | null;
};
