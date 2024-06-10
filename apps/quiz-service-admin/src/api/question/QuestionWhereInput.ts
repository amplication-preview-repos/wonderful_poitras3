import { ExplanationListRelationFilter } from "../explanation/ExplanationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { OptionListRelationFilter } from "../option/OptionListRelationFilter";
import { QuizWhereUniqueInput } from "../quiz/QuizWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type QuestionWhereInput = {
  explanations?: ExplanationListRelationFilter;
  id?: StringFilter;
  options?: OptionListRelationFilter;
  quiz?: QuizWhereUniqueInput;
  text?: StringNullableFilter;
};
