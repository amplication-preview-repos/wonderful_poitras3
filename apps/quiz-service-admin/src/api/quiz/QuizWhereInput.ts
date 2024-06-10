import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { QuestionListRelationFilter } from "../question/QuestionListRelationFilter";

export type QuizWhereInput = {
  chapter?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  questions?: QuestionListRelationFilter;
  subject?: StringNullableFilter;
  title?: StringNullableFilter;
  topic?: StringNullableFilter;
};
