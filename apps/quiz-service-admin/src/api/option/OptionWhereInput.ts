import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OptionWhereInput = {
  id?: StringFilter;
  isCorrect?: BooleanNullableFilter;
  question?: QuestionWhereUniqueInput;
  text?: StringNullableFilter;
};
