import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='mt-12 bg-[#1313130D] rounded-3xl'>
    
<section className="banner-container flex flex-col lg:justify-between lg:flex-row items-center p-12 ">

<div className="banner-title ">
<h1 className='text-8xl '>Books to freshen up your <br /> bookshelf</h1>
<Link to='/listedBook'>

<button class="btn btn-success">View The List</button>
</Link>
</div>
<div className="bannere-img lg:w-[500px] lg:h-[500px]">
<img src="/img/pngwing 1.png" alt="BOOK" className='w-[500px] h-[500px]' />


</div>

</section>



    </div>
  )
}

export default Banner
