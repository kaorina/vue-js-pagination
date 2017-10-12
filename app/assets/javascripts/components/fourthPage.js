Vue.component('fourth-page', {
  template: '#fourth-page-template',
  props: {
    pageState: String
  },
  computed: {
    active: function () {
      return this.pageState === 'fourth';
    }
  }
});
