<template>
    <v-container>
        <!-- Main Body -->
        <v-container>
            <v-card >
                <QuestionItem v-bind:question="currentQuestion">
                </QuestionItem>
            </v-card>
        </v-container>
        <!-- Navigation -->
        <button v-on:click="getNextPage">testButton</button>
        <v-btn v-on:click.native=getPreviousPage>Previous</v-btn>
        <v-btn v-on:click.native=getNextPage >Next</v-btn>
    </v-container>
</template>


<script>
import QuestionItem from "./QuestionItem";
export default {
   name: 'QuizItem',
   components: { QuestionItem },
      data: () => ({
       currPage: 0,
       selectedAnswers: {},
   }),
   computed: {
       currentQuestion()
       {
           return this.quiz.questions[this.currPage]   
       }
   },
  props: {
    quiz: {
      type: Object,
      default() {
        return {
            "id": 0,
            "description": "This is a test quiz object and should not appear",
            "questions": [
                { "id":0, "body":"This is a test Question 1 and should not appear", "answers":[ {"id":0, "body":"q Test Answer 1"}, {"id":1, "body":"q Test Answer 2"}, {"id":2, "body":"q Test Answer 3"} ], "correctAnswers":[1] },
                { "id":1, "body":"This is a test Question 2 and should not appear", "answers":[ {"id":0, "body":"q Test Answer 1"}, {"id":1, "body":"q Test Answer 2"}, {"id":2, "body":"q Test Answer 3"} ], "correctAnswers":[1] },
                { "id":2, "body":"This is a test Question 3 and should not appear", "answers":[ {"id":0, "body":"q Test Answer 1"}, {"id":1, "body":"q Test Answer 2"}, {"id":2, "body":"q Test Answer 3"} ], "correctAnswers":[1] }
            ],
            "subjects": ["WDD", "Software Engineering"],
            "difficulty": "Easy"
            }

           },
},

},
methods:{
    getPreviousPage: function()
    {
        this.currPage--;
    },
    getNextPage: function()
    {
        this.currPage++;
    },
    storeSelectedAnswers(answerId, QuestionId)
    {
        var temp = {
            "questionId": QuestionId,
            "selected": answerId
        };
        this.selectedAnswers.append(temp);
    }
}
}
</script>