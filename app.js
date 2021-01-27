const app = Vue.createApp({
    // data, functions
    data() {
        return {
            url: 'http://www.theninja.co.uk',
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: '/assets/book1.jpg' },
                { title: 'the way of kings', author: 'brandon sanderson', img: '/assets/book2.jpg' },
                { title: 'the final empire', author: 'brandon sand', img: '/assets/book3.jpg' }
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount("#app")