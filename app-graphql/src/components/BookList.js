import React from 'react'
import {gql} from 'apollo-boost'
import {useQuery}  from '@apollo/react-hooks'

import noImage from '../images/noimage.jpg'

const GET_BOOKS = gql`
    {
        books {
            _id
            title 
            author 
            img 
        }
    }
`;

const BookList = () => {
    const { loading, err, data } = useQuery(GET_BOOKS)
    if (loading) return <p>Loading messages...</p>
    if (err) return <p>Error!!</p>

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                {
                    data.books.map(({_id, title, author, img}) => (
                        <div key={_id} className="card m-2">
                            <img className="card-img-top" src={img || noImage} alt={title} />
                            <div className="card-body">
                                <h4>{title}</h4>
                                <p>{author}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BookList
