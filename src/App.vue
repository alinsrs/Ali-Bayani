<template>
  <v-app>
    <!-- Simple Top Nav -->
    <v-app-bar
        flat
        color="white"
        elevation="0"
        app
    >
      <v-toolbar-title class="font-weight-bold">
        <!-- Change text as needed -->
        Ali's Website
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- Simple Nav Buttons (anchors) -->
      <v-btn text href="#home">Home</v-btn>
      <v-btn text href="#publications">Publications</v-btn>
      <v-btn text href="#cv">CV</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* Global Styles: black text, white background */
body, html {
  margin: 0;
  padding: 0;
  font-family: 'InterVariable', sans-serif;
  background-color: #ffffff;
  color: #000000;
}

::-webkit-scrollbar {
  width: 0;
}
</style>
