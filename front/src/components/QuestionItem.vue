<template>
    <v-container>
        <v-card>
            <v-card-title v-text="question.body">
            </v-card-title>
        </v-card>

        <v-card v-for="answer in question.answers" :key="answer.index">
            <AnswerItem v-bind:answer='answer'>
            </AnswerItem>
        </v-card>
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