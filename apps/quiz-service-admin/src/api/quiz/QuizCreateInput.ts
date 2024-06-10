import { QuestionCreateNestedManyWithoutQuizzesInput } from "./QuestionCreateNestedManyWithoutQuizzesInput";

export type QuizCreateInput = {
  chapter?: string | null;
  description?: string | null;
  questions?: QuestionCreateNestedManyWithoutQuizzesInput;
  subject?: string | null;
  title?: string | null;
  topic?: string | null;
};
