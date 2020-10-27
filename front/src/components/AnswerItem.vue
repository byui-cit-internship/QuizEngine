<template>
    <v-btn :color="answerColor" :class="style" v-text="answerLetter + answerLetterSpace + answer.body" name="answerBTN" v-bind:value="answer.id" >
        <!-- <v-card-title v-text="answer.body"/> -->
    </v-btn>
</template>

<script>
export default {
  name: 'AnswerItem',
  created: function () {
    //this.$refs.answerbtn.value=this.answer.id
    this.init()
  },
  props: {
    graded: {
      type: Boolean,
      default(){
        return false;
      }
    },
    //correct answers id
    correctAnswerId: {
      type: Array,
      default(){
        return -1
      }
    },
    correct: {
      type: Boolean,
      default(){
        return false
      }
    },
    //the selected answer id(s)
    selectedAnswerId: {
      type:  Number,
      default(){
        return -1
      }
    },
    selected: {
      type: Boolean,
      default(){
        return false
      }
    },
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
  data: () => ({
    id: 0,
    style: "text-wrap text-left answer",
    answerColor: "",
    disabled: false
  }),
   computed: {
     value(){
       return 0
     }
   },
  methods: {
    setState()
    {
      //colors
      var right = "success"
      var wrong = "incorrect"
      var gradedStyle = " graded"
      var neutral = "neutral"
      if (this.graded)
      {
        this.style = this.style.concat(gradedStyle)
        if (this.correct)
        {
          return right
        }
        else if (this.selected)
        {
          return wrong
        }
        else if (!this.selected)
        {
          return neutral
        }
      }
      else
      {
        return neutral
      }
    },
    getStyle()
    {
      return this.gradedStyle
    },
    gradeMyself()
    {
      if(this.selectedAnswerId == this.answer.id)
      {
        this.selected = true
      }
      if(this.correctAnswerId == this.answer.id)
      {
        this.correct = true
      }



    },
    init() 
    {
      //this.answerBtn.value = this.answer.id
      //var tagName = this.answer.id + "answer";
      //document.getElementsByTagName("answer")[0].setAttribute("name", tagName)
      //document.getElementsByTagName("answerBTN")[0].setAttribute("value", this.answer.id)
      //var value = answer.id
      this.gradeMyself()
      this.answerColor = this.setState()
      console.log("currentId is " + this.answer.id + " " + this.id)

    }
  }
}
</script>
<style lang="scss">
  .answer
  {
    height:auto;
    width:auto;
  }
  .graded
  {
    pointer-events: none !important;
  }
  /* overrides the diabled button style */
// .theme--light.v-btn.v-btn--disabled:not(.v-btn--flat):not(.v-btn--text):not(.v-btn-outlined) {
//   &.correct{
//     color:inherit !important;
//     background-color: rgb(70, 201, 70) !important;
//   }
//   &.incorrect{
//     color:inherit !important;
//     background-color: #F50057 !important;
//   }
//   color:inherit !important;
//   background-color: green !important;
// }
</style>