import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { QuestionTitle } from "../question/QuestionTitle";

export const QuizCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="chapter" source="chapter" />
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput
          source="questions"
          reference="Question"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QuestionTitle} />
        </ReferenceArrayInput>
        <TextInput label="subject" source="subject" />
        <TextInput label="title" source="title" />
        <TextInput label="topic" source="topic" />
      </SimpleForm>
    </Create>
  );
};
