import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className=" mt-6 lg:mt-12 bg-[#1313130D] rounded-3xl">
      <section className="banner-container flex flex-col lg:justify-between lg:flex-row items-center p-12 ">
        <div className="banner-title ">
          <h1 className=" text-3xl font-bold text-black mb-8 lg:text-7xl ">
            Books to freshen up  <br /> your bookshelf
          </h1>
          <Link to="/listedBook">
            <button class="btn  bg-green-500 font-bold ml-12 lg:ml-0 lg:text-xl border-none text-white mt-3">View The List</button>
          </Link>
        </div>
        <div className="bannere-img w-[300px]  lg:w-[500px] lg:h-[500px] mt-8 lg:mt-0 ml-12">
          <img
            src="/img/pngwing 1.png"
            alt="BOOK"
            className="w-[200px] lg:w-[500px] h-[200px] lg:h-[500px]"
          />
        </div>
      </section>
    </div>
  );
};

export default Banner;
