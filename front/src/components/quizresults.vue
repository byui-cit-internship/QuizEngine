<template>
    <v-container>
        <FullQuiz :selectedAnswers="selectedAnswers" :quizId="this.quizId"></FullQuiz>
        <v-card>
            Quiz Id:{{this.quizId}}
        </v-card>
        <v-card>
            Selected answers: {{this.selectedAnswers}}
        </v-card>
        <v-container>
            <v-btn v-show="next" v-on:click.native=getNextPage>Next</v-btn>
            <v-btn v-show="final" v-on:click.native=submit>Submit</v-btn>
        </v-container>
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
    methods: {
        downloadJsonResults()
        {
            return 0
        }
    }

};
</script>