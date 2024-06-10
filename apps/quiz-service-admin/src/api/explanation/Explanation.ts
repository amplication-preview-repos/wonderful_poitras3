import { Question } from "../question/Question";

export type Explanation = {
  createdAt: Date;
  id: string;
  question?: Question | null;
  text: string | null;
  updatedAt: Date;
};
