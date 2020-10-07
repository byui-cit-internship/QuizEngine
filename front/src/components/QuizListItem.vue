<template>
    <v-container>
        <v-card>
            <v-card-title v-text="quiz.title"/>
            <v-card-subtitle v-for="subject in quiz.subjects" :key="subject.index">
                {{subject}}
            </v-card-subtitle>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: "QuizListItem",
    props: {
    quizitem:Object,
    },
    data:()=> ({
        quizitem:[
      { id: 1, title: "Quiz 1", subject: "Database" }],
    })
}
</script>