<template>
    <v-container>
        <!-- Main Body -->
        <v-container>
            <v-card v-for="question in quiz.questions" :key="question.id">
                <QuestionItem v-bind:question="question">
                </QuestionItem>
            </v-card>
        </v-container>
        <!-- Navigation -->
        <v-container>
        </v-container>
    </v-container>
</template>


<script>
import QuestionItem from "./QuestionItem";
export default {
   name: 'QuizItem',
   compnents: { QuestionItem },
  props: {
    quiz: {
      type: Object,
      default() {
        return {
            "id": 0,
            "description": "This is a test quiz object and should not appear",
            "questions": [
                { "id":0, "body":"This is a test Question and should not appear", "answers":[ {"id":0, "body":"q Test Answer 1"}, {"id":1, "body":"q Test Answer 2"}, {"id":2, "body":"q Test Answer 3"} ], "correctAnswers":[1] },
                { "id":1, "body":"This is a test Question and should not appear", "answers":[ {"id":0, "body":"q Test Answer 1"}, {"id":1, "body":"q Test Answer 2"}, {"id":2, "body":"q Test Answer 3"} ], "correctAnswers":[1] },
                { "id":2, "body":"This is a test Question and should not appear", "answers":[ {"id":0, "body":"q Test Answer 1"}, {"id":1, "body":"q Test Answer 2"}, {"id":2, "body":"q Test Answer 3"} ], "correctAnswers":[1] }
            ],
            "subjects": ["WDD", "Software Engineering"],
            "difficulty": "Easy"
            }

           },
}}}
</script>