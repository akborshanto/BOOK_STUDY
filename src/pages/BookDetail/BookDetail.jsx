import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UseDonation from "../../hook/UseDonation";
import { readLocalStorage } from "../../utils/LocalStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { wishListLocalStorage } from "../../shared/wishLish";

const BookDetail = () => {
  const { bookId } = useParams();
  const [singleData, setSingleData] = useState({});
  /* useDontaiton */
  const { data, loading } = UseDonation();
  //console.log(typeof bookId)

  useEffect(() => {
   
    const findData = data.find((item) => item.bookId == bookId);
    //console.log(findData)
    setSingleData(findData);
},[data, bookId]);

const handleRead=()=>{



if(singleData ){

wishListLocalStorage(singleData)
readLocalStorage(singleData)
}
}
/* handle wishlist */
const handleWishList=()=>{


   if(singleData){
    wishListLocalStorage(singleData)

   }


}
const{image,tags,bookName,author,rating,category}=singleData || {}

/* useContext */

  return (

    <section className="bg-white text-black font-bold ">
    <ToastContainer />
      <div className="container max-w-xl p-6 py-6 lg:py-12 mx-auto  lg:px-8 lg:max-w-7xl">
        <div className="grid gap-4  lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div className="lg:col-start-2">
            <h3 className="text-2xl font-bold tracking-tight sm:text-4xl text-black">
              {singleData?.bookName}
            </h3>
        <h4 className=" lg:border-b-2 mt-2 lg:mt-0 lg:p-4 text-xxl font-semibold">By:{singleData?.author}</h4>
            <div className="mt-2 lg:mt-12 ">
             
<h4 className="text-xl lg:text-2xl font-semibold border-b-2 p-2">{singleData?.category}</h4>
<h4 className="text-xl lg:2xl font-semibold"><span className='text-gray-400 text-xl lg:2xl'>Review:</span>{singleData?.review}</h4>

         
    
<div className='flex justify-between lg:justify-between lg:flex-row border-b-2 p-2'>
<h4 className="text-xl lg:text-2xl font-semibold ">Tag</h4>

<h4 className="text-green-400 font-semibold text-xl lg:text-2xl">#classic</h4>
<h4 className="text-xl  lg:text-2xl font-semibold text-green-400">#adolesence</h4>




</div>

<div className='flex flex-col lg:justify-between  gap-4 lg:gap-12 lg:flex-row '>



<h4 className="text-xl lg:text-2xl font-semibold "> 
Number of Pagaes:
<span className="text-[#131313CC] text-2xl"> {singleData?.totalPage}</span>

</h4>






</div>
<div className='flex flex-col lg:justify-between gap-16 lg:flex-row '>



<h4 className="text-xl lg:text-2xl font-semibold "><span className="text-[#131313CC]">Publisher: {singleData?.publisher}</span></h4>




</div>
<div className='flex flex-col lg:justify-between gap-16 lg:flex-row '>



<h4 className="text-2xl font-semibold ">
<span className="text-[#131313CC]">Year of Publishing: {singleData?.yearOfPublishing}</span>

</h4>



</div>
<div className='flex flex-col lg:justify-between  lg:flex-row'>



<h4 className="text-2xl font-semibold text-orange-200  my-4">Rating:{singleData?.rating}</h4>



</div>


<button class="btn btn-outline  btn-success text-xl" onClick={handleRead}>Read</button>


<button class="btn   bg-[#50B1C9] text-white border-none ml-6 text-xl" onClick={handleWishList}>WishList</button>




            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1 ">
            <img
              src={singleData?.image}
              alt=""
              className="mx-auto rounded-lg shadow-lg bg-gray-500 h-[300px] "
            />
          </div>
        </div>
      </div>
    </section>

   


  );
};

export default BookDetail;
