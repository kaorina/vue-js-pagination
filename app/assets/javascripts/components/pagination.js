var paginationButton = {
  'first': { '1st': false, '2nd': true, '3rd': false, '4th': false },
  'second': { '1st': true, '2nd': false, '3rd': true, '4th': false },
  'third': { '1st': true, '2nd': true, '3rd': false, '4th': true },
  'fourth': { '1st': true, '2nd': true, '3rd': true, '4th': false }
};

Vue.component('pagination', {
  template: '#pagination-template',
  props: {
    pageState: String
  },
  computed: {
    firstButton: function () {
      return paginationButton[this.pageState]['1st'];
    },
    secondButton: function () {
      return paginationButton[this.pageState]['2nd'];
    },
    thirdButton: function () {
      return paginationButton[this.pageState]['3rd'];
    },
    fourthButton: function () {
      return paginationButton[this.pageState]['4th'];
    }
  },
  methods: {
    changePage: function (page) {
      this.$emit('send-page-from-child', page);
    }
  }
});
