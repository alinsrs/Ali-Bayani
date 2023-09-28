<template>
  <v-app class="pa-0 ma-0">
    <v-app-bar class="elevation-10 v-app-bar--fixed appBar" color="#F2EFEF" height="90vh">
      <v-row>
        <v-col cols="12" lg="3" md="4">
          <h1 style="line-height: 3rem; font-size: 32px; font-weight: 700" class="ml-16 mt-2">
            Ali Bayani
          </h1>
        </v-col>

        <v-col cols="12" lg="9" md="8">
            <v-list style="display: flex" color="#F2EFEF">
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
                <a href="#project" class="mr-2" style="width: min-content"> Projects & Researches</a>
            </v-list-item>
              <v-list-item class="mr-1 pa-0">
                <a href="#resume" class="mr-2"> Resume </a>
            </v-list-item>
              <v-list-item class="mr-1">
                  <a href="conatct" class="mr-2"> Contact </a>
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

.appBar a{
  color: black!important;
  text-decoration: none;
  font-weight: 500;
}

.appBar a:hover{
  border-bottom: solid 2px black;
}




</style>
