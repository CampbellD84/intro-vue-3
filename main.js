const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    // Challenge Solution
    removeItem(id) {
      const idx = this.cart.indexOf(id);
      if (idx > -1) {
        this.cart.splice(idx, 1);
      }
    },
    // Challenge Solution
  },
});
