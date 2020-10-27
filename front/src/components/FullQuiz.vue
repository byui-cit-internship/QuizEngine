// This will be used to view and edit the quiz as well as in quiz results
<template>
    <v-container>
        <v-container v-for="(question, index) in quiz.questions" :key="index">
            <QuestionItem v-bind:question="question" :answer_toggle="selectedAnswers[index].selected" :graded="graded" :selected="selectedAnswers[index].selected">
            </QuestionItem>
        </v-container>
        <v-container>
            <v-btn v-on:click.native=downloadJsonResults()>Download Results</v-btn>
        </v-container>
    </v-container>
</template>

<script>
import QuestionItem from "./QuestionItem"
import quizzesJson from "../assets/quizzes.json";
import FileSaver from 'file-saver';

export default {
    components: { QuestionItem },
    name:"FullQuiz",
    data:() => ({
        //routing
        quizzes: quizzesJson,
        quizdata: {},
        completedDate: Date.now()
    }),
    props: {
        quizId: {
            type: Number,
            required: true
        },
        selectedAnswers: {
            type: Array,
            default(){
                return [{qid: 0, aid: 1}, {qid:0, aid:2}]
            }
        },
        graded: {
            type: Boolean,
            default(){
                return true
            }
        }
    },
    computed: {
        quiz: {
            set(obj)
            {
                this.quizdata = obj
            },
            get()
            {
                return this.quizdata
            }
        },
    },
    methods: {
        init()
        {
            this.getQuizByIdFromJson()
            console.log(this.selectedAnswers)
        },
        getQuizByIdFromJson()
        {
            console.log("Getting quiz from json......")
            console.log("found quizId: " + this.quizId)
            console.log("json obtained:" + this.quizzes)
            this.quiz = this.quizzes.find(quizz => quizz.id == this.quizId)
            console.log("Quiz obtained:" + this.quiz.id)
        },
        downloadJsonResults()
        {
            var filecontents = this.quiz;
            filecontents["results"] = this.selectedAnswers;
            filecontents["quizTakenDate"] = this.completedDate;
            filecontents = JSON.stringify(filecontents);
            var file = new File([filecontents], 'quizresults.json', {type: "text/json;charset=utf-8"})
            FileSaver.saveAs(file)
            return 0
        }
    },
      created() {
        this.init()
   },
};
</script>
