import {Schema, model}  from 'mongoose'

const bookSchema = new Schema(
    {
        title: {
            type: String,
            require: true
        },
        author: {
            type: String,
            require: true
        },
        content: {
            type: String,
            require: true
        },
        img: {
            type: String,
        },
        year: {
            type: Number,
            require: true

        }
    }

);

export default model("Book", bookSchema)