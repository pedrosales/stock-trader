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
      <v-btn text>End Day</v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{on, attrs}">
          <v-btn text v-bind="attrs" v-on="on">Save & Load</v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>Save Data</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Load Data</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style>
</style>