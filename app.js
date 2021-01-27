const app = Vue.createApp({
    // data, functions
    data() {
        return {
            showBooks: true,
            title: 'The final Empire',
            author: 'Brandon Sanderson',
            age: 46
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount("#app")