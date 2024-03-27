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
  }, [data, bookId]);
/* handle read button */
const handleRead=()=>{

if(singleData ){
readLocalStorage(singleData)


}

}
/* handle wishlist */
const handleWishList=()=>{

 
    wishListLocalStorage(singleData)
  


}
const{bookId:books,image,tags,bookName,author,rating,category}=singleData || {}

  return (
    <div>
      <section className="bg-white text-black font-bold ">
      <ToastContainer />
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-4xl font-bold tracking-tight sm:text-4xl text-gray-50">
                {singleData?.bookName}
              </h3>
          <h4 className=" border-b-2 p-4 text-2xl font-semibold">By:{singleData?.author}</h4>
              <div className="mt-12 space-y-12">
               
<h4 className="text-2xl font-semibold border-b-2 p-4">{singleData?.category}</h4>
<h4 className="text-2xl font-semibold"><span className='text-gray-400 text-3xl'>Review:</span>{singleData?.review}</h4>

           
      
<div className='flex flex-col lg:justify-between lg:flex-row border-b-2 p-4'>
<h4 className="text-2xl font-semibold ">Tag</h4>

<h4 className="text-green-400 font-semibold text-2xl">#classic</h4>
<h4 className="text-2xl font-semibold text-green-400">#adolesence</h4>




</div>

<div className='flex flex-col lg:justify-between gap-16 lg:flex-row '>



<h4 className="text-2xl font-semibold "><span className="text-[#131313CC]">Number of Pagaes:</span>

</h4>


<h4 className="text-2xl font-semibold ">


{singleData?.totalPage}</h4>



</div>
<div className='flex flex-col lg:justify-between gap-16 lg:flex-row '>



<h4 className="text-2xl font-semibold "><span className="text-[#131313CC]">Publisher:</span></h4>
<h4 className="text-2xl font-semibold ">{singleData?.publisher}</h4>



</div>
<div className='flex flex-col lg:justify-between gap-16 lg:flex-row '>



<h4 className="text-2xl font-semibold ">
<span className="text-[#131313CC]">Year of Publishing::</span>

</h4>
<h4 className="text-2xl font-semibold ">{singleData?.yearOfPublishing}</h4>



</div>
<div className='flex flex-col lg:justify-between  lg:flex-row'>



<h4 className="text-2xl font-semibold ">

<span className="text-[#131313CC]">Rating: </span>

</h4>
<h4 className="text-2xl font-semibold ">{singleData?.rating}</h4>



</div>


<button class="btn btn-outline  btn-success text-xl" onClick={handleRead}>Read</button>


<button class="btn   bg-[#50B1C9] text-white border-none ml-6 text-xl" onClick={handleWishList}>WishList</button>




              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1 ">
              <img
                src={singleData?.image}
                alt=""
                className="mx-auto rounded-lg shadow-lg bg-gray-500 w-full"
              />
            </div>
          </div>
        </div>
      </section>

<div className="">


</div>
    </div>
  );
};

export default BookDetail;
