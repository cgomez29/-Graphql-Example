import React, { useState } from 'react'
import { gql } from '@apollo/client'
import { useMutation } from '@apollo/react-hooks';

const CREATE_BOOK = gql`
    mutation CreateBook (
            $title: String!,
            $author: String!,
            $content: String!,
            $img: String,
            $year: Int!
    ) {
        createBook(title: $title, author: $author, content: $content, img: $img, year: $year) {
            author
        }
    } 
    
`;

const BookForm = () => {

    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [img, setImg] = useState('')
    var [year, setYear] = useState(0)
    const [createBook] = useMutation(CREATE_BOOK)

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={async e => {
                            e.preventDefault()
                            year = parseInt(year)
                            await createBook({variables: {title, author, content, img, year}})
                            window.location.href="/"
                        }}>
                            <div class="form-group">
                                <input type="text" placeholder="Author" className="form-control" 
                                value={author}
                                onChange={e => setAuthor(e.target.value)}/>
                            </div>

                            <div className="form-group">
                                <input type="text" placeholder="write a title" className="form-control" 
                                value={title}
                                onChange={e => setTitle(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <input type="text" placeholder="url" className="form-control" 
                                value={img}
                                onChange={e => setImg(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <input placeholder="year of publication" className="form-control" 
                                value={year}
                                onChange={e => setYear(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <textarea rows="3" placeholder="content..." className="form-control" 
                                value={content}
                                onChange={e => setContent(e.target.value)}/>
                            </div>

                            <button className="btn btn-success btn-block ">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookForm
