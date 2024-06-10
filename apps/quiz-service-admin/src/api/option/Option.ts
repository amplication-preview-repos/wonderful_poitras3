import { Question } from "../question/Question";

export type Option = {
  createdAt: Date;
  id: string;
  isCorrect: boolean | null;
  question?: Question | null;
  text: string | null;
  updatedAt: Date;
};
