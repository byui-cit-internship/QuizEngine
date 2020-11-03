<template>
    <v-container fluid style="text-align:left" color="rgb(255,0,0,0.25)">
        <v-card></v-card>
       <v-row style="height: 25px;">
        </v-row>
        <v-btn color="rgb(255,0,0,0.25)" x-large height=250 v-text="btn1" block :to="quizlist">
        </v-btn>
        <input type="color" value="#50c6f1"><input/>
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
        <v-btn x-large height=250  v-text="btn3" block :to="helloworld">
        </v-btn>
    </v-container>
</template>

<script>
import jscolor from '@eastdesire/jscolor'
export default {
    name:"ChartSettings",
    data:() => ({
        //routing
        quizlist: "/quizlist",
        helloworld:"/helloworld",
        btn1: "Quiz List",
        btn2: "Create a Quiz",
        btn3: "Results",
        defVar: jscolor
    }),
    props: {

        
    }
};
</script>