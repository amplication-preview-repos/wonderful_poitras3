import { StringFilter } from "../../util/StringFilter";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ExplanationWhereInput = {
  id?: StringFilter;
  question?: QuestionWhereUniqueInput;
  text?: StringNullableFilter;
};
