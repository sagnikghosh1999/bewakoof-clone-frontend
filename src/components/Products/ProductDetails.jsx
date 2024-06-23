import React, { useState } from "react";
import { Link } from "react-router-dom";
import MoblieProductSlider from "../slider/MoblieProductSlider";
import ProductDetailsSlider from "../slider/ProductDetailsSlider";

import { AiFillStar } from "react-icons/ai";

const ProductDetails = ({ product }) => {
  const [activeSize, setActiveSize] = useState("");
  const [activeAccordion, setActiveAccordion] = useState("");
  const [pincode, setPincode] = useState("");

  const addTobag = () => {};
  const addToWishlist = () => {};

  const {
    category = "men",
    subcategory = "T-shirt",
    rating,
    brand,
    images,
    title,
    colors,
    sizes,
    description,
    design = "Printed",
    price,
    strikedOffprice,
  } = product;
  const activeColor = "black";
  return (
    <div className="">
      {/* navigation  */}
      <div className="xl:w-[80%] xl:mx-auto md:mx-6 sm:mx-4 mx-2 py-4">
        <div className="flex text-[12px] text-[#2d2d2d] overflow-x-scroll scrollbar-hide">
          <Link className="mr-3  flex-shrink-0  hover:underline" to={"/"}>
            Home
          </Link>
          {category && (
            <>
              /
              <Link
                className="mx-3 flex-shrink-0  capitalize hover:underline"
                to={`/${category.split("_")[0]}`}
              >
                {category.split("_")[0]}'s clothing
              </Link>
            </>
          )}
          {subcategory && (
            <>
              /
              <Link
                className="mx-3 flex-shrink-0  capitalize hover:underline"
                to={"/"}
              >
                {`${category.split("_")[0]}'s ${subcategory}`}
              </Link>
            </>
          )}
          {design && (
            <>
              /
              <li className="mx-3  flex-shrink-0 list-none capitalize">
                {`${design} ${subcategory} for ${category.split("_")[0]}`}
              </li>
            </>
          )}
          /<li className="mx-3  flex-shrink-0 list-none capitalize">{brand}</li>
          /<li className="mx-3  flex-shrink-0 list-none capitalize">{title}</li>
        </div>
      </div>

      {/* container  */}
      <div className="flex xl:w-[80%] xl:mx-auto md:mx-6 sm:mx-2 flex-col md:flex-row py-4">
        <div className="w-full md:min-h-[640px] md:w-1/2 flex-1">
          <div className="hidden md:inline-block sticky top-24 w-full">
            <ProductDetailsSlider images={images} />
          </div>
          <div className="md:hidden">
            <MoblieProductSlider images={images} />
          </div>
        </div>
        <div className="flex-1  md:mt-0 mt-4">
          <div className="flex flex-col w-full px-2 md:px-6 md:max-w-[480px]">
            <div className="cursor-pointer text-[18px] font-semibold  leading-[21px] capitalize text-left text-[#4f5362]">
              {brand}
            </div>
            <h2 className="mb-0.5 pt-2 font-medium text-[16x] leading-[20px] text-[#737373] ">
              {title}
            </h2>
            <div className="border-[0.3px] py-[3px] px-2 gap-[5px] items-center bg-[#f7f7f7] border-[#949494] mt-3 font-semibold text-[14px] leading-[17px] text-[#303030] flex">
              <span>{rating}</span>
              <span className="text-[#ffc700]">
                <AiFillStar />
              </span>
            </div>
            <div className="pt-[5px]">
              <div className="mt-2.5">
                <div className="pr-1.5 pt-0.5 pb-0.5 flex flex-col">
                  <div className="flex items-end justify-start">
                    <p className="text-[24px] font-semibold text-[#0f0f0f] leading-6 mr-1">
                      <span className="text-[16px] leading-4 ">₹</span>
                      {price}
                    </p>
                    <p className="text-[14px] line-through text-[#949494] leading-[18px] mr-2">
                      {strikedOffprice}
                    </p>
                    <p className="text-[16px] font-medium text-[#00b852] leading-[19px] uppercase">
                      {Math.round(
                        ((strikedOffprice - price) / strikedOffprice) * 100
                      )}
                      % Off
                    </p>
                  </div>
                  <div className="text-[12px] leading-[15px] text-[#949494] mt-1">
                    inclusive of all taxes
                  </div>
                </div>
              </div>
            </div>
            {/* tribe membership */}
            <div className="mt-1 py-4 text-[12px] leading-3 border-y-[3px] border-[#eee] font-medium text-[#333]">
              TriBe members get an extra discount of{" "}
              <span className="font-bold">{Math.round(0.1 * price)}</span> and
              FREE shipping.
            </div>
            {/* color optns */}
            {colors && (
              <div className="mb-8 pt-2.5">
                <div className="uppercase leading-[1] font-bold text-[#333]">
                  colour options:
                </div>
                <div className="mt-2.5 flex flex-wrap items-center justify-start">
                  {colors.map((color, i) => (
                    <div
                      key={i}
                      className={`h-9 w-9 rounded-full border-2 mb-2 mr-3 bg-[#${
                        color.hex
                      }] ${
                        activeColor === color.color
                          ? "border-[#51cccc]"
                          : "border-[#949494]/[0.6]"
                      } `}
                    ></div>
                  ))}
                </div>
              </div>
            )}
            {/* sizes */}
            <div className="sm:mb-8 mb-4 pt-2.5">
              <div className=" leading-[1] font-bold justify-between text-[#333] flex">
                <span className="uppercase">select size</span>
                <span className="text-[#42a2a2] capitalize underline cursor-pointer">
                  size guide
                </span>
              </div>
              <ul className="pr-2 pt-2.5 pb-2 flex flex-wrap">
                {sizes.map((size, i) => (
                  <li
                    key={i}
                    className={`list-none h-12 w-12 mr-2 mb-2 rounded-[5px] text-[14px] cursor-pointer border border-[#333] font-bold flex items-center justify-center ${
                      activeSize === size
                        ? "text-[#fafafa] bg-[#333]"
                        : "text-[#333] bg-[#fafafa]"
                    }`}
                    onClick={() => setActiveSize(size)}
                  >
                    {size}
                  </li>
                ))}
              </ul>
            </div>
            {/* button */}
            <div className=" flex-col   md:flex hidden mb-3">
              <div className="flex items-center px-1  py-2 pb-3 gap-2 lg:gap-4 z-20 bg-[#fff]">
                <div
                  className="flex items-center justify-center bg-[#ffd84d] flex-1 h-10 rounded-[3px] gap-1 cursor-pointer"
                  onClick={addTobag}
                >
                  <img
                    src="https://images.bewakoof.com/web/ic-web-head-cart.svg"
                    alt="bag"
                    className="h-5 w-5"
                  />
                  <span className="uppercase font-bold text-[14px] leading-[17px] text-[#303030] pl-2">
                    Add to bag
                  </span>
                </div>
                <div
                  className="flex items-center justify-center bg-[#fff] border border-[#d6d6d6] flex-1 h-10 rounded-[3px] gap-1 cursor-pointer"
                  onClick={addToWishlist}
                >
                  <img
                    src="https://images.bewakoof.com/web/ic-web-head-cart.svg"
                    alt="bag"
                    className="h-5 w-5"
                  />
                  <span className="uppercase font-bold text-[14px] leading-[17px] text-[#303030] pl-2">
                    Add to bag
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col border-b-[3px] border-[#eee]  md:hidden sm:bottom-0 sticky bottom-14 md:relative  mb-5">
              <div className="flex items-center px-1 sm:px-3 py-2  gap-2  z-20 bg-[#fff]">
                <div
                  className="flex items-center justify-center bg-[#ffd84d] flex-1 h-10 rounded-[3px] gap-1 cursor-pointer "
                  onClick={addTobag}
                >
                  <img
                    src="https://images.bewakoof.com/web/ic-web-head-cart.svg"
                    alt="bag"
                    className="h-5 w-5"
                  />
                  <span className="uppercase font-bold text-[12px] pl-1 sm:text-[14px] leading-[17px] text-[#303030] sm:pl-2">
                    Add to bag
                  </span>
                </div>
                <div
                  className="flex items-center justify-center bg-[#fff] border border-[#d6d6d6] flex-1 h-10 rounded-[3px] gap-1 cursor-pointer"
                  onClick={addToWishlist}
                >
                  <img
                    src="https://images.bewakoof.com/web/ic-web-head-cart.svg"
                    alt="bag"
                    className="h-5 w-5"
                  />
                  <span className="uppercase font-bold text-[12px] pl-1 sm:text-[14px] leading-[17px] text-[#303030] sm:pl-2">
                    Add to bag
                  </span>
                </div>
              </div>
            </div>
            {/* details */}
            <section className="mt-3">
              {/* offers */}
              <div
                className="mt-2 py-2 border-y-2 border-[#eee] "
                onClick={() => {
                  if (activeAccordion !== "offers")
                    setActiveAccordion("offers");
                  else setActiveAccordion("");
                }}
              >
                <div className="mb-2 text-[12px] cursor-pointer font-bold flex justify-between items-center px-1">
                  <p>SAVE EXTRA WITH 1 OFFERS</p>
                  <i className="font-sans text-[22px] leading-[1.5]">
                    {activeAccordion === "offers" ? "-" : "+"}
                  </i>
                </div>
                {activeAccordion === "offers" && (
                  <li className="mb-2 flex px-1">
                    <img
                      className="h-[18px] w-[18px]"
                      src="https://images.bewakoof.com/web/discount-1-2x-1625212811.png"
                      alt="coupon_icon"
                    />
                    <div>
                      <p className="ml-2.5 text-[12px]  text-[#606060]">
                        Wohoo! Get a Free Notebook Worth Rs.249 on a minimum
                        order value of Rs.999. Use Coupon Code-
                      </p>
                      <p className="font-bold text-[#000] ml-2.5 text-[12px]">
                        GETFREEGIFT
                      </p>
                    </div>
                  </li>
                )}
              </div>
              {/* product description */}

              <div
                className="mt-2 py-2 border-b-2 border-[#eee] "
                onClick={() => {
                  if (activeAccordion !== "desc") setActiveAccordion("desc");
                  else setActiveAccordion("");
                }}
              >
                <div className="mb-2 text-[12px] uppercase cursor-pointer font-bold flex justify-between items-center px-1">
                  <p>Product description</p>
                  <i className="font-sans text-[22px] leading-[1.5]">
                    {activeAccordion === "desc" ? "-" : "+"}
                  </i>
                </div>
                {activeAccordion === "desc" && (
                  <div className="my-2 text-[12px] text-[#606060]">
                    <div className="font-medium pb-1">
                      {description.split(".")[0]}
                    </div>
                    <div className="font-bold pb-1">
                      Country of Origin -{" "}
                      <span className="font-medium">India</span>
                    </div>
                    <div className="font-bold pb-1">
                      Commodity -{" "}
                      <span className="font-medium">
                        {description.split(".")[4].split(" - ")[1]}
                      </span>
                    </div>
                    <div className="font-semibold text-[#42a2a2]">
                      Product Specifications
                    </div>
                    <ul>
                      <li>{description.split(".")[6]}</li>
                      <li>{description.split(".")[7]}</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* return */}
              <div
                className="mt-2 py-2 border-b-2 border-[#eee] "
                onClick={() => {
                  if (activeAccordion !== "return")
                    setActiveAccordion("return");
                  else setActiveAccordion("");
                }}
              >
                <div className="mb-2 text-[12px] cursor-pointer font-bold flex justify-between items-center px-1">
                  <p>15 DAY RETURNS & EXCHANGE</p>
                  <i className="font-sans text-[22px] leading-[1.5]">
                    {activeAccordion === "return" ? "-" : "+"}
                  </i>
                </div>
                {activeAccordion === "return" && (
                  <li className="mb-2 flex px-1">
                    <div>
                      <p className=" text-[12px] font-medium leading-3 text-[#606060]">
                        Easy returns upto 15 days of delivery. Exchange
                        available on select pincodes
                      </p>
                    </div>
                  </li>
                )}
              </div>
              {/* delivery */}

              <div className="mt-2 py-2 border-b-2 border-[#eee] ">
                <div
                  className="mb-2 text-[12px] cursor-pointer font-bold flex justify-between items-center px-1"
                  onClick={() => {
                    if (activeAccordion !== "delivery")
                      setActiveAccordion("delivery");
                    else setActiveAccordion("");
                  }}
                >
                  <p>15 DAY RETURNS & EXCHANGE</p>
                  <i className="font-sans text-[22px] leading-[1.5]">
                    {activeAccordion === "delivery" ? "-" : "+"}
                  </i>
                </div>
                {activeAccordion === "delivery" && (
                  <div className="mb-2 flex mt-1 relative">
                    <div className="w-full mb-[15px] flex items-center border-[0.5px] rounded-sm border-[rgba(0,0,0,.3)] p-0.5">
                      <input
                        type="text"
                        maxLength="6"
                        name="codCheck"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        placeholder=" "
                        className="text-[#000] py-2.5 px-3 z-20 border-none w-[calc(100%-75px)] bg-transparent outline-none peer peer-focus:outline-none"
                      />
                      <label
                        htmlFor="codCheck"
                        className="text-[rgba(0,0,0,.5)] left-[15px] top-[13px] absolute text-[12px] font-[700] duration-300 transform -translate-y-6 scale-75 z-10 origin-[0] peer-focus:left-1 peer-focus:text-[#303030]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 peer-focus:font-[500] bg-[#fff] px-1 "
                      >
                        Enter Pincode/Postal Code/Zipcode
                      </label>
                      <button className="text-[#42a2a2] py-2.5 px-3 text-[12px] underline font-bold ">
                        Check
                      </button>
                    </div>
                  </div>
                )}
              </div>
              {/* ratings component */}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
