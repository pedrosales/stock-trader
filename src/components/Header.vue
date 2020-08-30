<template>
  <v-app-bar app>
    <v-toolbar-title class="headline text-uppercase mr-4">
      <span>Stock</span>
      <span class="font-weight-light">Trader</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/portifolio">Portifolio</v-btn>
      <v-btn text to="/stocks">Stocks</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn text @click="endDay">End Day</v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{on, attrs}">
          <v-btn text v-bind="attrs" v-on="on">Save & Load</v-btn>
        </template>
        <v-list>
          <v-list-item @click="saveData">
            <v-list-item-title>Save Data</v-list-item-title>
          </v-list-item>
          <v-list-item @click="getData">
            <v-list-item-title>Load Data</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-layout align-center>
        <span class="text-uppercase grey--text text--darken-2">Funds: {{ funds | currency }}</span>
      </v-layout>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
  methods: {
    ...mapActions(["randomizeStocks", "getData"]),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const { funds, stockPortifolio, stocks } = this.$store.getters;
      this.$http.put("data.json", { funds, stockPortifolio, stocks });
    },
    loadData() {
      this.getData();
    },
  },
};
</script>

<style>
</style>