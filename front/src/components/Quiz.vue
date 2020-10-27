<template>
    <v-container>
        <!-- Main Body -->
        <v-container>
            <v-card header color="warning" v-show="alert" >
                <v-card-title v-text="alertmessage">
                    
                </v-card-title>
            </v-card>
            <v-card >
                <QuestionItem v-bind:question="currentQuestion" :answer_toggle="selectedAnswer" ref="questionObj">
                </QuestionItem>
            </v-card>

            <v-card>
                Selected Answers: {{this.selectedAnswers}}
            </v-card>
            <v-card>
                QuizId: {{this.quizId}}
            </v-card>
        </v-container>
        <!-- Navigation -->
        <button v-on:click="getNextPage">testButton</button>
        <v-btn v-show="previous" v-on:click.native=getPreviousPage>Previous</v-btn>
        <v-btn v-show="next" v-on:click.native=getNextPage>Next</v-btn>
        <v-btn v-show="final" v-on:click.native=submit>Submit</v-btn>
    </v-container>
</template>


<script>
import QuestionItem from "./QuestionItem";
import quizzesJson from "../assets/quizzes.json";
export default {
   name: 'QuizItem',
   components: { QuestionItem },
    data: () => ({
            currPage: 0,
            selectedAnswers: [],
            selectedAnswer: -1,
            prevqid: -1,
            nextqid: -1,
            quizzes: quizzesJson,
            quizdata: {},
            alertbool: false,
            alertmessage: "Please answer all questions before submitting!" 
            }),
   computed: {
       alert: {
           get()
           {
               console.log("getting alert val:" + this.alertbool)
               return this.alertbool
           },
           set(alert)
           {
               this.alertbool = alert
           }
       },
       quiz: {
           get()
           {
               return this.quizdata
           },
           set(obj)
           {
               this.quizdata = obj
           }
       },
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
       final()
       {
           console.log("in final")
           if(this.currPage >= (this.quiz.questions.length - 1))
           {
               console.log("in Final in If")
               return true
           }
           else
           {
               return false
           }
       },
       prevQuestionId()
       {
           return this.quiz.questions[this.currPage - 1].id
       },
       nextQuestionId()
       {
            return this.quiz.questions[this.currPage + 1].id

       },
       quizinfo: {
            get()
            {
                var quizId = this.quiz.id
                var selectedAnswers = this.selectedAnswers
                var temp = {name:'quizresults', params:{quizId,selectedAnswers}};
                return temp
            },
            set(obj)
            {
                this.quizdata = obj
            }
        }
   },
  props: {
    quizId: {
        type: Number,
        required: true
    },
//     quiz: {
//       type: Object,
//       default() {
//         return {
//             "id": 0,
//             "description": "This is a test quiz object and should not appear",
//             "questions": [
//                 { "id":0, "body":"This is a test Question 1 and should not appear", "answers":[ {"id":0, "body":"q Test Answer 1"}, {"id":1, "body":"q Test Answer 2"}, {"id":2, "body":"q Test Answer 3"} ], "correctAnswers":[1] },
//                 { "id":1, "body":"This is a test Question 2 and should not appear", "answers":[                 { "id": 4, "body": "q Long Test Answer, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }, { "id": 5, "body": "q Medium Test Answer, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" }, { "id": 6, "body": "q Short Test Answer 6" } ], "correctAnswers":[1] },
//                 { "id":2, "body":"This is a test Question 3 and should not appear", "answers":[ {"id":7, "body":"q Test Answer 7"}, {"id":8, "body":"q Test Answer 8"}, {"id":9, "body":"q Test Answer 9"} ], "correctAnswers":[1] }
//             ],
//             "subjects": ["WDD", "Software Engineering"],
//             "difficulty": "Easy"
//             }

//            },
// },
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
        this.getQuizByIdFromJson()
        // this.QuestionItem.init()
    },
    getQuizByIdFromJson()
    {
        console.log("Getting quiz from json......")
        console.log("found quizId: " + this.quizId)
        console.log("json obtained:" + this.quizzes)
        this.quiz = this.quizzes.find(quizz => quizz.id == this.quizId)
        console.log("Quiz obtained:" + this.quiz.id)
    },
    getPreviousPage: function()
    {     
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
    
    checkIfAllAnswered()
    {

        var allAnswered = false;
        /* This line makes sure that every instance of object in selectedAnswers 
        has both a question component AND a selected answer*/
        var allQAnswered = (this.selectedAnswers.every(qna => qna.question && qna.selected))
        /*now we already checked if every question in the array is answered now we check if 
        there is a question in the array for every question in the quiz*/
        var allQPopulated = (this.selectedAnswers.length == this.quiz.questions.length)
        console.log("answered1? : " + allAnswered)
        if(allQAnswered && allQPopulated)
        {
            console.log("answered2? : " + allAnswered)
            allAnswered = true
        }
        else
        {
            allAnswered = false
        }
        return allAnswered
    },
    submit: function()
    {
        if (this.$refs.questionObj.answer_toggle != -1)
        {
            this.storeSelectedAnswers(this.currentQuestion.id)
            this.$router.replace(this.quizinfo)
        }
        this.alert = !this.checkIfAllAnswered()
    },
    setAnswerToggle(qid)
    {
        //GET THE current question id
        //var qid = this.currentQuestion.id
        //search selected answers for the question id
        console.log("testing qid:" + qid)
        this.$refs.questionObj.answer_toggle = -1
        var found = false;
            this.selectedAnswers.forEach((response)=>{
            if (response.questionId == qid)
            {
                console.log(response)
                this.$refs.questionObj.answer_toggle = response.selected
                found = true
            }
            else if(found == false){
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
        if (QuestionId in this.selectedAnswers)
        {
            this.selectedAnswers.forEach((response)=>{
            console.log("enter loop 175")
            if (response.questionId == QuestionId)
            {
                console.log("Entered If Statment 177")
                response.selected = answerId
            }})
        }
        else
        {
            this.selectedAnswers.push(temp)
        }
        

    }
},
  created() {
        this.init()
   },
}
</script>