Vue.component('pagination', {
  template: '#pagination-template',
  methods: {
    changeState: function (page) {
      this.$emit('send-page-from-child', page);
    }
  }
});
