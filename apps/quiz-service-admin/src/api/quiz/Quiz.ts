import { Question } from "../question/Question";

export type Quiz = {
  chapter: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  questions?: Array<Question>;
  subject: string | null;
  title: string | null;
  topic: string | null;
  updatedAt: Date;
};
