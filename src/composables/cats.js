import { orderBy } from "lodash-es";
import { ref, computed } from "vue";

// Logic for sorting/filtering the cats object
// using lodash to get this done for demo
export const useCatsSort = (cats) => {
  const sortBy = ref("asc");
  const sortedCats = computed(() =>
    orderBy(cats.value, ["name"], [sortBy.value])
  );
  return { sortBy, sortedCats };
};

export const useCatsFilter = (cats) => {
  const catQuery = ref("");
  const filteredCats = computed(() => {
    if (!catQuery.value) return cats.value;

    const query = catQuery.value.toLowerCase();
    return cats.value.filter(({ name }) => name.toLowerCase().includes(query));
  });

  return {
    catQuery,
    filteredCats,
  };
};
