Vue.component('third-page', {
  template: '#third-page-template',
  props: {
    pageState: String
  },
  computed: {
    active: function () {
      return this.pageState === 'third';
    }
  }
});
