const app = Vue.createApp({
  data() {
    return {
      title: 'The Final Empire',
      author: 'Brandon Sanderson',
      age: 19
    }
  },
  methods: {
    changeTitle() {
      this.title = 'Dong Time'
    }
  }
});

app.mount('#app');

