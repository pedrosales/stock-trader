<template>
  <div>
    <h1 class="display-3 font-weight-light mb-4">Trade and Consulte your Stocks</h1>
    <v-sheet :elevation="6" class="pa-2" color="primary">
      <v-icon class="white--text mr-3">fas fa-info-circle</v-icon>
      <span class="headline white--text font-weight-light">You can save & load you data</span>
    </v-sheet>
    <v-sheet :elevation="6" class="pa-2 mt-3 darken-1" color="success">
      <v-icon class="white--text mr-3">fas fa-info-circle</v-icon>
      <span class="headline white--text font-weight-light">Click in "End Day" to go to a new day!</span>
    </v-sheet>
    <v-divider class="my-4"></v-divider>
    <p class="display-1">
      <strong>Funds:</strong>
      {{ funds | currency }}
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
};
</script>

<style>
</style>