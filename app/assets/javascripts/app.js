$(function () {
  new Vue({
    el: '#app',
    data: {
      pageState: 'first'
    },
    methods: {
      switchComponent: function (page) {
        this.pageState = page;
      }
    }
  });
});
