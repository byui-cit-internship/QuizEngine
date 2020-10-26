<template>
    <v-container>
        <FullQuiz :quizId="quizId"></FullQuiz>
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
        }
    }
};
</script>