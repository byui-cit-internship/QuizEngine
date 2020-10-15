<template>
    <v-container>
        <!-- Main Body -->
        <v-container>
            <v-card >
                <QuestionItem v-bind:question="currentQuestion">
                </QuestionItem>
            </v-card>
            <v-card>
                Selected Answers: {{this.selectedAnswers}}
            </v-card>
        </v-container>
        <!-- Navigation -->
        <button v-on:click="getNextPage">testButton</button>
        <v-btn v-on:click.native=getPreviousPage>Previous</v-btn>
        <v-btn v-on:click.native=getNextPage>Next</v-btn>
    </v-container>
</template>


<script>
import QuestionItem from "./QuestionItem";
export default {
   name: 'QuizItem',
   components: { QuestionItem },
   created() {
        this.init()
   },
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
                { "id":1, "body":"This is a test Question 2 and should not appear", "answers":[ {"id":4, "body":"q Test Answer 4"}, {"id":5, "body":"q Test Answer 5"}, {"id":6, "body":"q Test Answer 6"} ], "correctAnswers":[1] },
                { "id":2, "body":"This is a test Question 3 and should not appear", "answers":[ {"id":7, "body":"q Test Answer 7"}, {"id":8, "body":"q Test Answer 8"}, {"id":9, "body":"q Test Answer 9"} ], "correctAnswers":[1] }
            ],
            "subjects": ["WDD", "Software Engineering"],
            "difficulty": "Easy"
            }

           },
},

},
methods:{
    init() {
        console.log("entering quiz init")
        // this.QuestionItem.init()
    },
    getPreviousPage: function()
    {
        this.currPage--;
    },
    getNextPage: function()
    {
        this.currPage++;
    },
    storeSelectedAnswers(QuestionId)
    {
        var answerId = this.$refs.QuestionItem.answer_toggle.value;
        var temp = {
            "questionId": QuestionId,
            "selected": answerId
        };
        this.selectedAnswers.append(temp);
    }
}
}
</script>