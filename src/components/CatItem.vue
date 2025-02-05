<template>
  <v-card :to="`/cat/${cat.id}`">
    <v-img class="bg-grey-lighten-2" max-height="125" :src="cat.imageUrl" cover></v-img>
    <v-card-title class="text-h6">
      {{ cat.name }}
    </v-card-title>
  </v-card>
</template>

<script>
import { Cat } from "@/api/cat";

export default {
  props: {
    cat: {
      type: Cat,
      required: true,
    },
  },
};
</script>
