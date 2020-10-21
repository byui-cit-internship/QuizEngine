<template>
    <v-container>
        <v-card v-on:click.native=setquiz()>
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
    computed: {
        quizdata: {
            get()
            {
                var quizId = this.quizitem.id
                var temp = {name:'quiz', params:{quizId}};
                return temp
            },
            set(obj)
            {
                this.quizdata = obj
            }
        }
    },

    methods: {
        setquiz()
        {
            this.$router.replace(this.quizdata)
        }
    },
}
</script>