Vue.component('second-page', {
  template: '#second-page-template',
  props: {
    pageState: String
  },
  computed: {
    active: function () {
      return this.pageState === 'second';
    }
  }
});
