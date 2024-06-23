import React from "react";
import { BsHeart } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

const ProductCard = ({ product, grid }) => {
  const addToWish = () => {};

  const { images, title, price, strikedOffprice, rating } = product;
  return (
    <div className="cursor-pointer mb-2 mx-1 md:mx-2 rounded-md overflow-hidden flex-shrink-0 border border-[#ddd] pb-2">
      <div className="relative overflow-hidden">
        <span className="absolute top-0 z-10 left-0 uppercase font-bold bg-gray-800 bg-opacity-70 text-[8px] tracking-wider text-white px-2 py-1 rounded-sm">
          Oversiized fit
        </span>
        <img
          className="cursor-pointer transition-opacity  duration-[0.4s] opacity-100 hover:animate-animate-img"
          src={images[0]}
          alt={title}
        />
        {grid && (
          <span className="absolute bottom-4 flex items-center left-0 bg-[rgba(255,255,255,.8)] text-[11px] font-bold  px-1 py-[1px]">
            {rating}
            <AiFillStar className="text-yellow-500 ml-1 text-[12px]" />
          </span>
        )}
      </div>
      <div className="grid grid-cols-10 justify-between items-center px-2">
        <div className="col-span-9">
          <p className="text-[12px] font-bold my-1">Bewakoof</p>
          <p className="line-clamp-1 text-[9px] md:text-[11px]">{title}</p>
        </div>
        <BsHeart className=" text-[16px] text-center" onClick={addToWish} />
      </div>
      <div className="flex items-end px-1 lg:px-2">
        <h2 className="font-bold">
          <span className="lg:text-[14px] md:text-[12px] text-[11px] tracking-tighter font-[500] font-sans">
            ₹
          </span>
          {price}
        </h2>
        <span className="text-[10px] md:text-[11px]  line-through tracking-tighter text-gray-500 ml-1">
          ₹{strikedOffprice}
        </span>
        {!grid && (
          <span className="text-[10px] md:text-[12px] tracking-tighter font-semibold text-[#00b852] ml-1">
            {Math.round(((strikedOffprice - price) / strikedOffprice) * 100)}%
            OFF
          </span>
        )}
      </div>
      {grid && (
        <p className="capitalize text-[9px] lg:text-[11px] px-2 py-1 w-full font-bold bg-[#f7f7f7]">
          ₹{price - Math.round(0.1 * price)} for tribe members
        </p>
      )}
    </div>
  );
};

export default ProductCard;
