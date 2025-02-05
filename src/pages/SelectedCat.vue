<template>
  <div class="text-left pt-4">
    <div v-if="hasCat">
      <h3 class="text-lg mb-4 border-b pb-3">{{ cat.name }}</h3>
      <div class="mb-4">{{ cat.description }}</div>
    </div>
    <p v-else>No cat selected</p>
  </div>
</template>

<script>
import { isNil } from 'lodash-es';
import { ref, watch, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getBreedById } from '@/api/catApi.js';

export default {
  setup() {
    const cat = ref(null);
    const route = useRoute();
    const hasCat = computed(() => !isNil(cat.value && cat.value.id))

    const initGetBreedById = async id => {
      cat.value = await getBreedById(id);
    };

    watch(() => route.params.id, initGetBreedById);

    onMounted(() => {
      initGetBreedById(route.params.id);
    });

    return {
      cat,
      hasCat
    };
  },
};
</script>
