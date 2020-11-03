<template>
    <v-container fluid style="text-align:left">
        <v-row style="height: 25px;">
        </v-row>
        <v-btn x-large height=250 v-text="btn1" block :to="quizlist">
        </v-btn>
        <v-row style="height: 25px;">
        </v-row>
            <v-spacer/>
            <v-divider/>
        <v-btn x-large height=250  v-text="btn2" block :to="helloworld">
        </v-btn>
        <v-row style="height: 25px;">
        </v-row>
            <v-spacer/>
            <v-divider/>
        <v-btn x-large height=250  v-text="btn3" block :to="studybook">
        </v-btn>
    </v-container>
</template>

<script>

export default {
    name:"Home",
    data:() => ({
        //routing
        quizlist: "/quizlist",
        studybook: "/studybook",
        helloworld:"/helloworld",
        btn1: "Quiz List",
        btn2: "Create a Quiz",
        btn3: "StudyBook"
    })
};
</script>