<template>
  <div class="quizList">
    <v-card>
      <v-card-title>Select a Subject/Quiz</v-card-title>

      <!-- Show Unique Subjects in Select List -->
      <v-container fluid>
        <v-autocomplete
          v-model="selectedSubjects"
          v-on:select=getFilteredQuizzes()
          v-on:change=getFilteredQuizzes()
          label="Subjects"
          :items="getUniqueSubjects"
          chips
          deletable-chips
          clearable
          multiple
        ></v-autocomplete>

        <!-- Displays Subject List Items based on Selected Subjects -->
        <v-subheader>Selected Subjects</v-subheader>
        <v-list-item v-for="subject in selectedSubjects" :key="subject.index">
          {{ subject }}
        </v-list-item>

        <!-- TODO Show Filtered Quizzes based on Subject (Dynamic List Rendering) -->
        <v-subheader>Quiz</v-subheader>
        <QuizListItem v-for="quiz in filteredQuizzes" :key="quiz.index" @click="quizref" v-bind:quizitem="quiz"></QuizListItem>
        <!-- <v-list-item v-for="quiz in filteredQuizzes" :key="quiz.index" :to="quiz">
          {{ quiz }}
        </v-list-item> -->
      </v-container>
      <!-- TODO Show Filtered Quizzes based on Subject -->
      <v-subheader>Quiz</v-subheader>
      <v-list-item v-for="quiz in quizzes" :key="quiz.id">
        <QuizListItem v-bind:quizitem="quiz" />
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
import QuizListItem from "./QuizListItem";
import quizzesJson from "../assets/quizzes.json";
export default {
  name: "QuizList",
  components: { QuizListItem },
  data: () => ({
    quizref: "/quiz",
    show: false,
    selectedSubjects: [],
    filteredQuizzes: [],
    quizzes: quizzesJson,
  }),
  methods: {
    callQuiz(quizId)
    {
      this.$router.replace({name:'quiz', params:{quizId}})
    },
    clearFilteredList() {
      let filteredQuizzes = this.filteredQuizzes;
      filteredQuizzes = [];
      return filteredQuizzes;
    },
    getFilteredQuizzes() {
      // for each quiz in quizzes, if quiz.id is in any of selected subjects array, push quiz.title to selected quizzes array
      // TODO How to handle event of new subject being selected

      this.clearFilteredList();
      this.filteredQuizzes = this.quizzes.filter((quiz) => this.selectedSubjects.some(subject => quiz.subjects.includes(subject)));
    },
  },

  computed: {
    // getUniqueSubjectsv2() {
    //    foreach subject in quizzes.subjects;
    // }
    getUniqueSubjects() {
      let array = this.quizzes.map((a) => a.subjects);
      array = array.join().split(",");
      //Only unique values allowed in ES6 Set. Way of filtering out non-unique values
      let uniqueSubjects = Array.from(new Set(array)).sort();
      return uniqueSubjects;
    }

    //MOVE TO METHOD
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
