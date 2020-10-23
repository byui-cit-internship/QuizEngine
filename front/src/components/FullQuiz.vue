// This will be used to view and edit the quiz as well as in quiz results
<template>
    <v-container>
        <QuestionItem></QuestionItem>
    </v-container>
</template>

<script>
export default {
    name:"FullQuiz",
    data:() => ({
        //routing
        quizlist: "/quizlist",
        helloworld:"/helloworld",
        btn1: "Quiz List",
        btn2: "Create a Quiz",
        btn3: "Results"
    })
};
</script>
