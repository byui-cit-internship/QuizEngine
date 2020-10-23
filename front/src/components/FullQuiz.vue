// This will be used to view and edit the quiz as well as in quiz results
<template>
    <v-container>
        <v-container v-for="(question, index) in quiz.questions" :key="index">
            <QuestionItem v-bind:question="question" :graded="graded">
            </QuestionItem>
        </v-container>
    </v-container>
</template>

<script>
import QuestionItem from "./QuestionItem"
import quizzesJson from "../assets/quizzes.json";
export default {
    components: { QuestionItem },
    name:"FullQuiz",
    data:() => ({
        //routing
        quizzes: quizzesJson,
    }),
    props: {
        quizId: {
            type: Number,
            required: true
        },
        graded: {
            type: Boolean,
            default(){
                return true
            }
        }
    },
    methods: {
        getQuizByIdFromJson()
        {
            console.log("Getting quiz from json......")
            console.log("found quizId: " + this.quizId)
            console.log("json obtained:" + this.quizzes)
            this.quiz = this.quizzes.find(quizz => quizz.id == this.quizId)
            console.log("Quiz obtained:" + this.quiz.id)
        },
    }
};
</script>
