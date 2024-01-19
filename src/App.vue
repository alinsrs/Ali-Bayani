<template>
  <v-app class="pa-0 ma-0">
    <v-app-bar class="elevation-3 v-app-bar--fixed appBar" height="90vh" style="background-color: #F2EFEF">
      <v-row>
        <v-col cols="12" lg="3" md="3">
          <h1 style="line-height: 3rem; font-size: 32px; font-weight: 700" class="ml-16 mt-2">
            Ali Bayani
          </h1>
        </v-col>
        <v-col cols="12" lg="8" md="8" style="height: 100%; margin-left: -85px">
          <v-list style="display: flex; background-color: #F2EFEF;">

            <v-list-item class="pa-0">
              <a href="#bio" class="mx-auto"> Biography </a>
            </v-list-item>


            <v-list-item class="pa-0 mx-auto">
              <a href="#publication" class="mx-auto"> Publications </a>
            </v-list-item>

            <v-list-item class="pa-0 mx-10">
              <a href="#projects" class="mx-auto" style="width: max-content"> Projects & Researches</a>
            </v-list-item>

            <v-list-item class="pa-0 mx-auto" style="">
              <a href="#resume" class="mx-auto"> Resume </a>
            </v-list-item>
            <v-list-item class="pa-0 mx-auto" style="">
              <a href="#contact" class="mx-auto"> Contact </a>
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
