<template>
    <v-container fluid style="text-align:left">
        <v-btn block :to="quizlist" >
            <a style="text-align:left" >
                Quiz List
            </a>
                <v-spacer/>
        </v-btn>
    </v-container>
</template>

<script>

export default {
    name:"Home",
    data:() => ({
        //routing
        quizlist: "/quizlist",
        btn1: "Quiz List"
    })
};
</script>