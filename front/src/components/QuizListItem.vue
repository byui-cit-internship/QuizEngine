<template>
    <v-container>
        <v-card>
            <v-card-title v-text="quizitem.title"/>
            <v-card-subtitle v-for="subject in quizitem.subjects" :key="subject.index">
                {{subject}}
            </v-card-subtitle>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: "QuizListItem",
    props: {
    quizitem: {
        type:Object,
        required:true,
    }
    },
}
</script>