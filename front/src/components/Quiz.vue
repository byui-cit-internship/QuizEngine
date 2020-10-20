<template>
    <v-container>
        <!-- Main Body -->
        <v-container>
            <v-card >
                <QuestionItem v-bind:question="currentQuestion" :answer_toggle="selectedAnswer" ref="questionObj">
                </QuestionItem>
            </v-card>
            <v-card>
                Selected Answers: {{this.selectedAnswers}}
            </v-card>
        </v-container>
        <!-- Navigation -->
        <button v-on:click="getNextPage">testButton</button>
        <v-btn v-show="previous" v-on:click.native=getPreviousPage>Previous</v-btn>
        <v-btn v-show="next" v-on:click.native=getNextPage>Next</v-btn>
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
            selectedAnswers: [],
            selectedAnswer: -1,
            prevqid: -1,
            nextqid: -1
   }),
   computed: {
       currentQuestion()
       {
           return this.quiz.questions[this.currPage]   
       },
       previous ()
       {
           if (this.currPage >= 1) {
               return true
           }
           else{
               return false
           }

       },
        next ()
       {
           if (this.currPage > (this.quiz.questions.length - 2)) {
               return false
           }
           else {
               return true
           }

       },
       prevQuestionId()
       {
           return this.quiz.questions[this.currPage - 1].id
       },
       nextQuestionId()
       {
           if (this.quiz.questions.length < this.currPage + 1)
           {
               return this.quiz.questions[this.currPage + 1].id
           }
           else
           {
               return this.quiz.questions[this.currPage].id
           }
           
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
    // previous : {
    //     type: Object,
    //     default () {
    //         return {
    //             isVisible: true
    //         }
    //     }
    // },
    // next : {
    //     type: Object,
    //     default () {
    //         return {
    //             isVisible: true
    //         }
    //     }
    // },

},
methods:{
    init() {
        console.log("entering quiz init")
        // this.QuestionItem.init()
    },
    getPreviousPage: function()
    {
        console.log("setting nextqid to:" + this.nextQuestionId)     
        if (this.$refs.questionObj.answer_toggle != -1)
        {
            this.storeSelectedAnswers(this.currentQuestion.id)
        }
        this.$refs.questionObj.answer_toggle = -1 

        this.setAnswerToggle(this.prevQuestionId)
        this.currPage--;


    },
    getNextPage: function()
    {
        if (this.$refs.questionObj.answer_toggle != -1)
        {
            this.storeSelectedAnswers(this.currentQuestion.id)
        }
        this.$refs.questionObj.answer_toggle = -1

        this.setAnswerToggle(this.nextQuestionId)
        this.currPage++;
    },
    setAnswerToggle(qid)
    {
        //GET THE current question id
        //var qid = this.currentQuestion.id
        //search selected answers for the question id
        console.log("testing qid:" + qid)
        this.$refs.questionObj.answer_toggle = -1
        this.selectedAnswers.forEach((response)=>{
            if (response.questionId == qid)
            {
                console.log(response)
                this.$refs.questionObj.answer_toggle = response.selected
            }
            else{
                this.$refs.questionObj.answer_toggle = -1

            }
        })
        //if found set answer toggle to the selected answer for that item
        //if its not found set answer toggle to negative 1
    },
    setSelectedAnswer(answer_toggle)
    {
        this.selectedAnswer = answer_toggle
    },
    storeSelectedAnswers(QuestionId)
    {
        var answerId = this.$refs.questionObj.answer_toggle
        var temp = {
            "questionId": QuestionId,
            "selected": answerId
        }
        if (this.selectedAnswers.length > 0)
        {
            this.selectedAnswers.forEach((response)=>{
            console.log("enter loop 175")
            if (response.questionId == QuestionId)
            {
                console.log("Entered If Statment 177")
                response.selected = answerId
            }
            else
            {
                this.selectedAnswers.push(temp)

            }  
    })
        }
        else
        {
            this.selectedAnswers.push(temp)
        }

    }
}
}
</script>