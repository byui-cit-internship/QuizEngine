<template>
    <v-card>
        <v-card-title v-text="answer.body"/>
    </v-card>
</template>

<script>
export default {
  name: 'AnswerItem',
  props: {
  	answer: {
      type: Object,
      default:{id:0, body:"This is a test answer and should not appear"},
  	},
  }
}
</script>