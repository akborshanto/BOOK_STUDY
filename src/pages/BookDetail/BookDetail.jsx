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
  toast("Already Data read");
readLocalStorage(singleData)

}
/* handle wishlist */
const handleWishList=()=>{

wishListLocalStorage(singleData)

console.log(dataAseKina)


console.log(saveData)


  console.log('dskf')
}

  return (
    <div>
      <section className="bg-gray-800 text-gray-100">
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

           
{/* tag */}              
<div className='flex flex-col lg:justify-between lg:flex-row border-b-2 p-4'>
<h4 className="text-2xl font-semibold ">Tag</h4>
{/* 

<h4 className="text-2xl font-semibold text-green-400">#{singleData?.tags[2]}</h4>
<h4 className="text-2xl font-semibold text-green-400">#{singleData?.tags[1]}</h4>

*/}

</div>

<div className='flex flex-col lg:justify-between gap-16 lg:flex-row '>



<h4 className="text-2xl font-semibold ">Number of Pages:</h4>
<h4 className="text-2xl font-semibold ">{singleData?.totalPage}</h4>



</div>
<div className='flex flex-col lg:justify-between gap-16 lg:flex-row '>



<h4 className="text-2xl font-semibold ">Publisher:</h4>
<h4 className="text-2xl font-semibold ">{singleData?.publisher}</h4>



</div>
<div className='flex flex-col lg:justify-between gap-16 lg:flex-row '>



<h4 className="text-2xl font-semibold ">Year of Publishing:</h4>
<h4 className="text-2xl font-semibold ">{singleData?.yearOfPublishing}</h4>



</div>
<div className='flex flex-col lg:justify-between  lg:flex-row'>



<h4 className="text-2xl font-semibold ">Rating:</h4>
<h4 className="text-2xl font-semibold ">{singleData?.rating}</h4>



</div>


<button class="btn btn-outline btn-success" onClick={handleRead}>Read</button>

<Link to='/listedBook'>
<button class="btn  btn-primary ml-6" onClick={handleWishList}>WishList</button>

</Link>


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

      <Link to="/">
        <button class="btn btn-success">GO BACK</button>
      </Link>
    </div>
  );
};

export default BookDetail;
