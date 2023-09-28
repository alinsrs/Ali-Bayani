<template>
  <v-app class="pa-0 ma-0">
    <v-app-bar class="elevation-3 v-app-bar--fixed appBar" height="90vh" style="background-color: rgb(219,212,227)">
      <v-row>
        <v-col cols="12" lg="3" md="3">
          <h1 style="line-height: 3rem; font-size: 32px; font-weight: 700" class="ml-16 mt-2">
            Ali Bayani
          </h1>
        </v-col>
        <v-col cols="12" lg="8" md="8" style="height: 100%; margin-left: -35px">
          <v-list style="display: flex; background-color: rgb(219,212,227)">

            <v-list-item class="px-1">
              <a href="#bio" class="mr-2"> Biography </a>
            </v-list-item>

            <v-list-item class="mr-1">
              <a href="#pae" class="mr-2" style="width: min-content"> Academic Engagement </a>
            </v-list-item>

            <v-list-item class="mr-1">
              <a href="#publication" class="mr-2"> Publications </a>
            </v-list-item>

            <v-list-item class="mr-1">
              <a href="#projects" class="mr-2" style="width: min-content"> Projects & Researches</a>
            </v-list-item>

            <v-list-item class="mr-1 pa-0" style="width: 20px!important;">
              <a href="#resume" class="mr-2"> Resume </a>
            </v-list-item>
            <v-list-item class="mr-1" style="margin-left: -25px">
              <a href="#contact" class="mr-2"> Contact </a>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main class="ma-0 pa-0">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
::-webkit-scrollbar {
  width: 0;
}


@media (max-width: 600px) {
  body {
    margin-right: calc(100vw - 100%);
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
}

* {
  font-family: 'verdana' !important;
}

.appBar a {
  color: black !important;
  text-decoration: none;
  font-weight: 500;
}

.appBar a:hover {
  border-bottom: solid 2px black;
}


</style>
