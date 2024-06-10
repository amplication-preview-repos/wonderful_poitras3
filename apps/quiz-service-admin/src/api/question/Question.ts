import { Explanation } from "../explanation/Explanation";
import { Option } from "../option/Option";
import { Quiz } from "../quiz/Quiz";

export type Question = {
  createdAt: Date;
  explanations?: Array<Explanation>;
  id: string;
  options?: Array<Option>;
  quiz?: Quiz | null;
  text: string | null;
  updatedAt: Date;
};
