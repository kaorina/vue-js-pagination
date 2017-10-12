Vue.component('first-page', {
  template: '#first-page-template',
  props: {
    pageState: String
  },
  computed: {
    active: function () {
      return this.pageState === 'first';
    }
  }
});
