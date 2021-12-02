import Book from "../../model/Book"
const Query = {
    saludar() {
        return "Hola a todos!"
    },
    books: async () => {
        return await Book.find({})
    }
}


export default Query