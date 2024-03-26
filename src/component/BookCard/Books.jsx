import React, { useEffect, useState } from 'react'
import BooksCards from './BooksCards'

const Books = () => {

const [books,setBooks]=useState([])

useEffect(()=>{
fetch('data.json')
.then(res=> res.json())
.then(data =>setBooks(data))


},[])

  return (
    <div>
      <h1 className='text-center text-8xl my-8 font-bold'>BOOK</h1>

<div className='grid grid-cols-1  lg:gap-12 lg:grid-cols-3'>
{
    books.map(book => <BooksCards book={book} key={book.bookId} books={books}></BooksCards>)
}

</div>

    </div>
  )
}

export default Books
