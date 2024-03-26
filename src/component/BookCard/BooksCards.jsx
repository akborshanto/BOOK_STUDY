import React from 'react'
import { Link } from 'react-router-dom'
import { PiStarThin } from "react-icons/pi";
const BooksCards = ({book,books}) => {
    
const{bookId,image,tags,bookName,author,rating,category}=book || {}

  return (
    <div className='bg-white'>
  <Link to={`/bookDetail/${bookId}`}>
  
  <div className="card w-96 bg-white  shadow-2xl hover:shadow-green-300 p-8" >
  <figure><img src={book.image} alt={book.bookName} className=' w-[300px] h-[300px] lg:w-[400px ] lg:h-[300px] rounded-lg' /></figure>
  <div className="card-body">
  <div className="card-actions justify-start gap-12">
  <div className="font-bold  text-green-400">{tags[1]}</div> 
  <div className=" font-bold  text-green-400">{tags[0]}</div>
</div>
<h2 className='text-[#131313CC] font-bold text-2xl'>{bookName}</h2>
    <p className='text-[#131313CC] font-bold text-xsl'>By:{author.slice(0,20)}</p>
    <div className="card-actions justify-between">
      <div className=" text-[#131313CC]  text-xl font-semibold">{category}</div> 
      <div className=" text-[#131313CC]  text-xl font-semibold flex items-center">{rating} <PiStarThin className=' text-orange-500 font-bold'/></div>
    </div>
  </div>
</div>
  
  </Link>
    </div>
  )
}

export default BooksCards
