// store.js
import { defineStore } from "pinia";

export const useProductStore = defineStore({
  id: "product",
  state: () => ({
    product: {},
  }),
  actions: {
    setProduct(product) {
      this.product = { ...product };
    },
  },
  persist: true,
});
