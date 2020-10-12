<template>
    <v-container>
        <v-card>
            <v-card-title v-text="question.body">
            </v-card-title>
        </v-card>
        <v-col>
        <v-card v-for="answer in question.answers" :key="answer.index">
            <v-col>
                <v-card>
                    <v-card-title v-text="key+1">
                    </v-card-title>
                </v-card>
            </v-col>
            <v-col>
            <AnswerItem v-bind:answer='answer'>
            </AnswerItem>
            </v-col>
        </v-card>
        </v-col>
    </v-container>
</template>

<script>
import AnswerItem from "./AnswerItem";
export default {
   name: 'QuestionItem',
   compnents: { AnswerItem },
  props: {
    question: {
      type: Object,
      default() {
        return {
            "id":0,
            "body":"This is a test Question and should not appear", 
            "answers":[
            {"id":0, "body":"q Test Answer 1"},
            {"id":1, "body":"q Test Answer 2"},
            {"id":2, "body":"q Test Answer 3"},
            ],
            "correctAnswers":[1],
            }
           },
}}}
</script>