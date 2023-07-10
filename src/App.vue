<template>
  <v-app>
    <v-main>
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

body{
  overflow-x: hidden;
}
*{
  overflow-x: hidden;
}

@media (max-width: 600px) {
  body {
    margin-right: calc(100vw - 100%);
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
}

</style>
