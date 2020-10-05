<template>
  <div class="navbar">
    <v-app-bar app height="75px">
      <v-btn icon class="ml-2">
        <v-icon>mdi-book</v-icon>
      </v-btn>

      <v-toolbar-title>Quiz Engine</v-toolbar-title>
      <v-spacer />

      <v-btn class="mx-2">Account</v-btn>
      <v-btn>
        <v-icon> mdi-magnify </v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
