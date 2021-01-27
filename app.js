const app = Vue.createApp({
    // data, functions
    data() {
        return {
            url: 'http://www.theninja.co.uk',
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: '/assets/book1.jpg', isFav: true },
                { title: 'the way of kings', author: 'brandon sanderson', img: '/assets/book2.jpg', isFav: false },
                { title: 'the final empire', author: 'brandon sand', img: '/assets/book3.jpg', isFav: true }
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount("#app")