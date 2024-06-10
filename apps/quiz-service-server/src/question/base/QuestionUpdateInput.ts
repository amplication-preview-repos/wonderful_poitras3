/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ExplanationUpdateManyWithoutQuestionsInput } from "./ExplanationUpdateManyWithoutQuestionsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { OptionUpdateManyWithoutQuestionsInput } from "./OptionUpdateManyWithoutQuestionsInput";
import { QuizWhereUniqueInput } from "../../quiz/base/QuizWhereUniqueInput";

@InputType()
class QuestionUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ExplanationUpdateManyWithoutQuestionsInput,
  })
  @ValidateNested()
  @Type(() => ExplanationUpdateManyWithoutQuestionsInput)
  @IsOptional()
  @Field(() => ExplanationUpdateManyWithoutQuestionsInput, {
    nullable: true,
  })
  explanations?: ExplanationUpdateManyWithoutQuestionsInput;

  @ApiProperty({
    required: false,
    type: () => OptionUpdateManyWithoutQuestionsInput,
  })
  @ValidateNested()
  @Type(() => OptionUpdateManyWithoutQuestionsInput)
  @IsOptional()
  @Field(() => OptionUpdateManyWithoutQuestionsInput, {
    nullable: true,
  })
  options?: OptionUpdateManyWithoutQuestionsInput;

  @ApiProperty({
    required: false,
    type: () => QuizWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuizWhereUniqueInput)
  @IsOptional()
  @Field(() => QuizWhereUniqueInput, {
    nullable: true,
  })
  quiz?: QuizWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  text?: string | null;
}

export { QuestionUpdateInput as QuestionUpdateInput };
