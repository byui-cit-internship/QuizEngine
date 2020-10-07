<template>
    <v-container fluid style="text-align:left">
        <v-btn x-large v-text="btn1" block :to="quizlist">
        </v-btn>
            <v-spacer/>
            <v-divider/>
        <v-btn x-large v-text="btn2" block :to="helloworld">
        </v-btn>
            <v-spacer/>
            <v-divider/>
        <v-btn x-large v-text="btn3" block :to="helloworld">
        </v-btn>

    </v-container>
</template>

<script>

export default {
    name:"Home",
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