<template>
    <v-container fluid style="text-align:left">
        <v-tabs vertical center>
        <v-tab v-text="btn1" :to="quizlist" />
        <v-tab v-text="btn2" :to="helloworld" />
        <v-tab v-text="btn1" :to="helloworld" />   
        </v-tabs>
<!-- 
        <v-btn v-text="btn1" left block :to="quizlist">
        </v-btn>
            <v-spacer/>
            <v-divider/>
        <v-btn v-text="btn2" block :to="helloworld">
        </v-btn>
            <v-spacer/>
            <v-divider/>
        <v-btn v-text="btn3" block :to="helloworld">
        </v-btn> -->

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