import React from 'react'
import { Link } from 'react-router-dom'

const BooksCards = ({book,books}) => {
    
const{bookId,image,tags,bookName,author,rating,category}=book || {}

  return (
    <div>
  <Link to={`/bookDetail/${bookId}`}>
  
  <div className="card w-96 bg-base-100 shadow-xl" >
  <figure><img src={book.image} alt={book.bookName} /></figure>
  <div className="card-body">
  <div className="card-actions justify-start gap-12">
  <div className="badge badge-outline">NULL</div> 
  <div className="badge badge-outline">NULL</div>
</div>
<h2>{bookName}</h2>
    <p>By:{author}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{category}</div> 
      <div className="badge badge-outline">{rating}</div>
    </div>
  </div>
</div>
  
  </Link>
    </div>
  )
}

export default BooksCards
