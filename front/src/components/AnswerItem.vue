<template>
    <v-btn v-text="answerLetter + answerLetterSpace + answer.body" name="answerBTN" ref="answerbtn" >
        <!-- <v-card-title v-text="answer.body"/> -->
    </v-btn>
</template>

<script>
export default {
  name: 'AnswerItem',
  created: function () {
    this.init()
  },
  props: {
    answer: {
      type: Object,
      default(){
        return{id:0, body:"This is a test answer and should not appear"}
        },
   },
   answerLetter: {
     type: String,
     default(){
       return 'A'
     }
   },
    answerLetterSpace: {
     type: String,
     default(){
       return '. '
     }
   },
  },
    data: function(){
      this.init()
      return {
        id: 0
      }
   },
   computed: {
     value(){
       return this.answer.id
     }
   },
  methods: {
    init() {
      //this.answerBtn.value = this.answer.id
      //var tagName = this.answer.id + "answer";
      //document.getElementsByTagName("answer")[0].setAttribute("name", tagName)
      //document.getElementsByTagName("answerBTN")[0].setAttribute("value", this.answer.id)
      //var value = answer.id
      console.log("currentId is " + this.answer.id + " " + this.id)
      this.$refs.answerbtn.value = this.value
    }
  }
}
</script>