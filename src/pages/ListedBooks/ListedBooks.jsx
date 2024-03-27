import React, {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { CiLocationOn } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
import { MdOutlineContactPage } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
const ListedBooks = () => {
  const [read, setRead] = useState([]);
  const [wish, setWish] = useState([]);
const [readDisplay,setReadDisplay]=useState([])
  //console.log(read)
  useEffect(() => {
    const getDefaultData = JSON.parse(localStorage.getItem("read")) || [];
    setRead(getDefaultData);

  }, []);

  /* wish list */

  useEffect(() => {
    const getDefaultData = JSON.parse(localStorage.getItem("wishList")) || [];
    setWish(getDefaultData);
    setReadDisplay(getDefaultData)
  }, []);



  // const sorts=[
  //   {name:'shanto',score:30},
  //   {name:'adto',score:20},
  // ]
  // console.log(readDisplay)

  /* context api */


  return (
   
    <div>
    
    <div className="text-center mb-6">
      <h1 className="bg-gray-200 p-4 text-center font-bold rounded-3xl my-8 text-3xl lg:text-6xl text-black font-serif">
        BOOKS
      </h1>

      <div className="dropdown dropdown-bottom mb-16 lg:mb-6">
        <div tabIndex={0} role="button" className="btn m-1 bg-green-400 border-none text-white text-xl">
          Sort By<IoIosArrowDown />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow text-[#FFAC33] font-bold text-xl  rounded-box w-52"
        >
          <li >
            <a>Rating</a>
          </li>
          <li>
            <a>Number of Pages</a>
          </li>
          <li>
            <a>Published Year</a>
          </li>
        </ul>
      </div>
    </div>

    <Tabs className='p-4 lg:p-0'>
      <TabList>
        <Tab>Read Books</Tab>
        <Tab>WisList Books</Tab>
      </TabList>

      <TabPanel className=''>
     <div className="">
     
     
     {read?.map((item) => (


       <div  key={Math.random()} className=" mb-4  mt-10 lg:mt-16 lg:mb-12 shadow-2xl hover:bg-green-100    p-4">
       
       
       <div className="flex flex-col lg:flex-row lg:items-center gap-8 text-center  lg:text-start w-full space-x-2 sm:space-x-4">
       <img
         className="ml-16 ml:0 flex-shrink-0 object-cover w-[200px] lg:w-[300px] h-[200px] lg:h-[300px] dark:border- rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
         src={item.image}
         alt="Polaroid camera"
       />
       <div className="flex flex-col justify-between w-full pb-4">
         <div className="flex justify-between w-full pb-2 space-x-2">
           <div className="space-y-1">
             <h3 className=" text-xl font-serif leading-snug sm:pr-8  text-black font-bold mb-4 text-start">
               {item.bookName}
             </h3>
             <p className="text-sm text-start font-bold font-serif text-black my-4">
               By:{item.author}
             </p>

             <div className="text-start flex flex-col lg:flex-row gap-2 justify-start lg:gap-10 text-black font-bold ">
               <h1 className=" ">Tag</h1>
               <h1 className=" text-green-400">#{item.tags[0]}</h1>
               <h1 className=" text-green-400">#{item.tags[1]}</h1>

               <div className="flex  gap-2 top-0 items-center">
                 <span className="font-bold text-black ">
                   <CiLocationOn />
                 </span>
                 <h1 className="font-bold text-[#131313CC]  ">
                   yearOfPublishing :{item.yearOfPublishing}
                 </h1>
               </div>
             </div>
           </div>


         </div>

   
         <div className="flex flex-col gap-3 text-xl lg:flex-row lg:gap-8 border-b-2 pb-4 my-4">
         
         <div className="flex text-[#131313CC] gap-2 items-center">
         <span>
           <IoMdContact />
         </span>
         <h1 className="text-[#131313CC]  font-bold">Publisher:{item.publisher}</h1>
       </div>
       <div className="flex text-[#131313CC] gap-2 items-center">
         <span>
         <MdOutlineContactPage />
         </span>
         <h1 className="text-[#131313CC] font-bold ">Page:{item.totalPage}</h1>
       </div>
         </div>
     
<div className="flex flex-col lg:flex-row gap-4">

<button class="btn bg-[#328EFF99] rounded-3xl border-none text-white lg:text-xl">Category:{item.category}</button>
<button class="btn bg-[#FFAC3326] text-[#FFAC33] rounded-3xl border-none lg:text-xl mx-6">Rating:{item.rating}</button>
<button class="btn bg-[#23BE0A] rounded-3xl border-none text-white lg:text-xl">viewDetails</button>
</div>

       </div>
     </div>

       </div>

    ))}
     </div>
      </TabPanel>
      <TabPanel>
        {wish?.map((wish) => (
          <div className=" mb-4  mt-10 lg:mt-16 lg:mb-12 shadow-2xl hover:bg-green-100    p-4">
       
       
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 text-center  lg:text-start w-full space-x-2 sm:space-x-4">
          <img
            className="ml-16 ml:0 flex-shrink-0 object-cover w-[200px] lg:w-[300px] h-[200px] lg:h-[300px] dark:border- rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
            src={wish.image}
            alt="Polaroid camera"
          />
          <div className="flex flex-col justify-between w-full pb-4">
            <div className="flex justify-between w-full pb-2 space-x-2">
              <div className="space-y-1">
                <h3 className=" text-xl font-serif leading-snug sm:pr-8  text-black font-bold mb-4 text-start">
                  {wish.bookName}
                </h3>
                <p className="text-sm text-start font-bold font-serif text-black my-4">
                  By:{wish.author}
                </p>
 
                <div className="text-start flex flex-col lg:flex-row gap-2 justify-start lg:gap-10 text-black font-bold ">
                  <h1 className=" ">Tag</h1>
                  <h1 className=" text-green-400">#{wish.tags[0]}</h1>
                  <h1 className=" text-green-400">#{wish.tags[1]}</h1>
 
                  <div className="flex  gap-2 top-0 wishs-center">
                    <span className="font-bold text-black ">
                      <CiLocationOn />
                    </span>
                    <h1 className="font-bold text-[#131313CC]  ">
                      yearOfPublishing :{wish.yearOfPublishing}
                    </h1>
                  </div>
                </div>
              </div>
 
   
            </div>
 
      
            <div className="flex flex-col gap-3 text-xl lg:flex-row lg:gap-8 border-b-2 pb-4 my-4">
            
            <div className="flex text-[#131313CC] gap-2 items-center">
            <span>
              <IoMdContact />
            </span>
            <h1 className="text-[#131313CC]  font-bold">Publisher:{wish.publisher}</h1>
          </div>
          <div className="flex text-[#131313CC] gap-2 items-center">
            <span>
            <MdOutlineContactPage />
            </span>
            <h1 className="text-[#131313CC] font-bold ">Page:{wish.totalPage}</h1>
          </div>
            </div>
        
 <div className="flex flex-col lg:flex-row gap-4">
 
 <button class="btn bg-[#328EFF99] rounded-3xl border-none text-white lg:text-xl">Category:{wish.category}</button>
 
 <button class="btn bg-[#FFAC3326] text-[#FFAC33] rounded-3xl border-none lg:text-xl mx-6">Rating:{wish.rating}</button>

 <button class="btn bg-[#23BE0A] rounded-3xl border-none text-white lg:text-xl">viewDetails</button>
 
 

 </div>
 
          </div>
        </div>
 
          </div>
 
        ))}
      </TabPanel>
    </Tabs>


  </div>
    

   
  );
};

export default ListedBooks;
