<template>
    <v-container>
        <FullQuiz :selectedAnswers="selectedAnswers" :quizId="quizId"></FullQuiz>
        <v-card>
            Quiz Id:{{this.quizId}}
        </v-card>
        <v-card>
            Selected answers: {{this.selectedAnswers}}
        </v-card>
    </v-container>
</template>

<script>
import FullQuiz from "./FullQuiz";
export default {
    components: {FullQuiz},
    name:"QuizResults",
    data:() => ({
        //routing
        quizlist: "/quizlist",
        helloworld:"/helloworld",
        btn1: "Quiz List",
        btn2: "Create a Quiz",
        btn3: "Results"
    }),
    props: {
        quizId: {
            type: Number,
            required: true
        },
        selectedAnswers: {
            type: Array,
            required: true
        }
    },

};
</script>