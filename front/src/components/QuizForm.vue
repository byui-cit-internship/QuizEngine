<template>
   <v-container>
      <dd-form
         id="QuizForm"
         :data="exampleDataSet"
         :descriptions="exampleDescriptions"
         :functions="functions"
         @submit="submit"
         @change="change"
      >
      </dd-form>
      <v-card>
         {{ this.active }}
      </v-card>
      <v-card v-if="saved">
         The data you saved is:
         {{ this.savedData }}
      </v-card>
   </v-container>
</template>

<script>
import ddForm from "vue-dd-form";
import description from "../assets/formDD.json";
export default {
   name: "QuizForm",
   components: {
      ddForm,
   },
   data: () => ({
      active: "",
      saved: false,
      savedData: "",
      exampleDataSet: {},
      exampleDescriptions: description,
      functions: {
         '_index': (item) => {
            // If an answer, then get the second index
            // instead of the first, which is the question index
            const i = item.path.includes("answers") ? 1 : 0;
            const index = item.path.split(".")[i].match(/\d+/)[0];
            return Number(index) + 1;
         }
      }
   }),
   methods: {
      //  TODO: Attach to FE->BE API
      //  Should Send data to server
      //  Get the author, creation date, ids,
      //  last edited date, last edited by,
      //  subjects, classes, and diffiulty
      //  fields dynamically
      submit() {
         this.saved = true;
         this.savedData = JSON.stringify(this.exampleDataSet);
      },
      change() {
         this.active = JSON.stringify(this.exampleDataSet);
         console.log(this.exampleDataSet);
      }
   },
};
</script>

<style>
.view__wrapper {
   width: 100%;
}
</style>