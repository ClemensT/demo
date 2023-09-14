<script setup lang="ts">

import { ref } from 'vue'


const items = [
  {
    title: 'Foo',
    value: 'foo',
  },
  {
    title: 'Bar',
    value: 'bar',
  },
  {
    title: 'Fizz',
    value: 'fizz',
  },
  {
    title: 'Buzz',
    value: 'buzz',
  },
];

const drawer = ref(false)

</script>

<template>

  <v-card>
    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <v-app-bar
        color="primary"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>My files</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn variant="text" icon="mdi-magnify"></v-btn>

        <v-btn variant="text" icon="mdi-filter"></v-btn>

        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        location="bottom"
        temporary
      >
        <v-list
        >
        <v-list-item>
          <RouterLink to="/">Home</RouterLink>
        </v-list-item>
        <v-list-item>
          <RouterLink to="/edit">Edit</RouterLink>
        </v-list-item>
        <v-list-item>
          <RouterLink to="/learn">Learn</RouterLink>
        </v-list-item>        
      
      </v-list>
      </v-navigation-drawer>

    </v-layout>
  </v-card>
  
  <RouterView />
</template>
