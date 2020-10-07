<template>
  <div class="quizList">
    <v-card>
      <v-card-title>Select a Subject/Quiz</v-card-title>

      <!-- Show Unique Subjects in Select List -->
      <v-container fluid>
        <v-autocomplete
          v-model="selectedSubjects"
          v-on:select="getFilteredQuizzes"
          label="Subjects"
          :items="getUniqueSubjects"
          chips
          deletable-chips
          clearable
          multiple
        ></v-autocomplete>

<<<<<<< HEAD
        <!-- Displays Subject List Items based on Selected Subjects -->
        <v-subheader>Selected Subjects</v-subheader>
        <v-list-item v-for="subject in selectedSubjects" :key="subject.index">
          {{ subject }}
        </v-list-item>

        <!-- TODO Show Filtered Quizzes based on Subject (Dynamic List Rendering) -->
        <v-subheader>Quiz</v-subheader>
        <v-list-item v-for="quiz in filteredQuizzes" :key="quiz.index">
          {{ quiz }}
        </v-list-item>
      </v-container>
=======
      <!-- TODO Show Filtered Quizzes based on Subject -->
      <v-subheader>Quiz</v-subheader>
      <v-list-item v-for="quiz in quizzes" :key="quiz.id">
        {{quiz.title}}
      </v-list-item>
>>>>>>> 62da190f6c0d425323858da46e62b5d62ec1ea4b
    </v-card>
  </div>
</template>

<script>
import QuizListItem from './QuizListItem'
export default {
  name: "QuizList",
  compnents: {QuizListItem},
  data: () => ({
    show: false,
    selectedSubjects: [],
    filteredQuizzes: [],
    quizzes: [
      { id: 1, title: "Quiz 1", subject: "Database" },
      { id: 2, title: "Quiz 2", subject: "Database" },
      { id: 3, title: "Quiz 3", subject: "Security" },
      { id: 4, title: "Quiz 4", subject: "Security" },
      { id: 5, title: "Quiz 5", subject: "Software Engineering" },
      { id: 6, title: "Quiz 6", subject: "Software Engineering" },
      { id: 7, title: "Quiz 7", subject: "Front End Engineering" },
      { id: 8, title: "Quiz 8", subject: "Back End Engineering" },
    ],
  }),
  methods: {},

  computed: {
    getUniqueSubjects() {
      let array = this.quizzes.map((a) => a.subject);
      //Only unique values allowed in ES6 Set. Way of filtering out non-unique values
      let uniqueSubjects = Array.from(new Set(array)).sort();
      return uniqueSubjects;
    },

    clearFilteredList() {
      let filteredQuizzes = this.filteredQuizzes;
      filteredQuizzes = [];
      return filteredQuizzes;
    },

    getFilteredQuizzes() {
      // for each quiz in quizzes, if quiz.id is in any of selected subjects array, push quiz.title to selected quizzes array
      // TODO How to handle event of new subject being selected

      this.clearFilteredList;
      let selectedSubjects = this.selectedSubjects;
      let filteredQuizzes = this.filteredQuizzes;
      this.quizzes.forEach((element) => {
        if (element.subject.includes(selectedSubjects)) {
          filteredQuizzes.push(element.title);
        }
      });
      return filteredQuizzes;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>