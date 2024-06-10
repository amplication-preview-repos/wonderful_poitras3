import { QuestionUpdateManyWithoutQuizzesInput } from "./QuestionUpdateManyWithoutQuizzesInput";

export type QuizUpdateInput = {
  chapter?: string | null;
  description?: string | null;
  questions?: QuestionUpdateManyWithoutQuizzesInput;
  subject?: string | null;
  title?: string | null;
  topic?: string | null;
};
