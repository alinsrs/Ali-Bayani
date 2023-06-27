<template xmlns="http://www.w3.org/1999/html">
  <v-main>
      <v-row class="pa-0 ma-0">
          <v-col cols="12" lg="6" md="5" order-md="1" order="2" order-lg="1"
                 class="text-center">
              <div style="font-size: 40px; font-weight: 600;
                          line-height: 3">
                  My Name is
                  <br>
                  Ali Bayani
              </div>
          </v-col>
          <v-col cols="12" lg="6" md="5" order="1" order-md="2" order-lg="2">
              <div class="ma-0 pa-0" :style="{'background-color': $vuetify.theme.currentTheme.primary}"
                   style="width: 100%; height: 100%">

              </div>
          </v-col>
      </v-row>
  </v-main>
</template>

<script>
export default {
    name: "resumePage"
}
</script>

<style scoped>



</style>