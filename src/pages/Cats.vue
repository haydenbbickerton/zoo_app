<template>
  <v-main>
    <v-container>
      <v-row>
        <v-form class="mx-auto mb-16" autocomplete="off">
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field v-model="catQuery" label="Filter cats"></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-select v-model="sortBy" label="Sort" :items="['asc', 'desc']"></v-select>
            </v-col>

            <v-col cols="12" md="4">
              <v-select v-model.number="limit" label="Pagination" :items="[5, 10, 20]"></v-select>

              <v-btn @click="prevPage" prepend-icon="mdi-arrow-left" class="mr-2">Previous</v-btn>
              <v-btn @click="nextPage" append-icon="mdi-arrow-right">Next</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-row>
            <v-col cols="4" v-for="cat of sortedCats" :key="cat.id">
              <CatItem :cat="cat" />
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="6">
          <v-sheet min-height="70vh" rounded="lg" color="grey-lighten-2">
            <router-view />
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { ref, watch, onMounted } from "vue";
import { getBreeds } from "@/api/catApi.js";
import CatItem from "@/components/CatItem.vue";

import { useCatsSort, useCatsFilter } from "@/composables/cats.js";

export default {
  components: {
    CatItem,
  },
  setup() {
    const cats = ref([]);
    const page = ref(0);
    const limit = ref(10);
    const { catQuery, filteredCats } = useCatsFilter(cats);
    const { sortBy, sortedCats } = useCatsSort(filteredCats);

    const prevPage = () => {
      if (page.value > 0) page.value--;
    };
    const nextPage = () => page.value++;

    const doGetBreeds = async () => {
      cats.value = await getBreeds({ page: page.value, limit: limit.value });
    };

    watch([page, limit], doGetBreeds);

    onMounted(() => {
      doGetBreeds();
    });

    return {
      cats,
      catQuery,
      sortBy,
      filteredCats,
      sortedCats,
      limit,
      prevPage,
      nextPage,
    };
  },
};
</script>
