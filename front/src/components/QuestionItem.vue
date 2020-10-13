<template>
    <v-container>
        <v-card>
            <v-card-title v-text="question.body">
            </v-card-title>
        </v-card>
        <v-col>
        <v-card v-for="(answer, index) in question.answers" :key="index">
            <v-col>
                <v-card>
                    <v-card-title v-text=answerLetters[index]>
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
    data: () => ({
     "answerLetters": [
  'A', 'B', 'C', 'D', 'E', 'F',
  'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z'
]
 }),
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