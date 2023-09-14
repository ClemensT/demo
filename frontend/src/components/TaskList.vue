<script setup lang="ts">
import {type Item} from  "../repository/item.d"

defineProps<{
  list: Item[]
}>()
</script>

<template>
  <li v-for="item in list">
     {{  item.name }}
  </li>
</template>
