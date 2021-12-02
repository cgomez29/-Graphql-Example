
import Book from "../../model/Book"

const Mutation = {
    createBook: async (_, {title, author, content, img, year}) => {
        const newBook = Book({title, author, content, img, year})
        return await newBook.save()
    }
}


export default Mutation