import React from "react";
import { footerClothings, footerItems } from "../../assets/data/footerData";
import { GiReturnArrow } from "react-icons/gi";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { IoLogoApple, IoLogoPinterest, IoLogoTwitter } from "react-icons/io5";
import { BsSnapchat } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-screen bg-[#181818] h-full mb-14 sm:mb-0">
      <div className="w-full max-w-6xl mx-auto text-white md:pt-[75px] py-4 md:pb-10 ">
        <div className="my-2 md:my-3">
          <img src="/bewakoof-footer.png" alt="bewakoof logo" className="h-8" />
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 px-4">
          <div className="flex flex-col">
            <div className="text-[12px] sm:tracking-[1px] uppercase text-[#fdd835] mb-2.5 sm:mb-5 ">
              {"CUSTOMER SERVICE"}
            </div>
            <ul className="flex flex-col pb-2.5">
              {footerItems["CUSTOMER SERVICE"].map((item, i) => (
                <li
                  key={i}
                  className="opacity-90 leading-[18px] text-[12px] cursor-pointer hover:underline"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <div className="text-[12px] sm:tracking-[1px] uppercase text-[#fdd835] mb-2.5 sm:mb-5 ">
              {"Company"}
            </div>
            <ul className="flex flex-col pb-2.5">
              {footerItems["COMPANY"].map((item, i) => (
                <li
                  key={i}
                  className="opacity-90 leading-[18px] text-[12px] cursor-pointer hover:underline"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <div className="text-[12px] sm:tracking-[1px] uppercase text-[#fdd835] mb-2.5 sm:mb-5 ">
              {"Connect with us"}
            </div>
            <ul className="flex flex-col pb-2.5">
              {footerItems["CONNECT WITH US"].map((item, i) => (
                <li
                  key={i}
                  className="opacity-90 leading-[18px] text-[12px] cursor-pointer hover:underline"
                >
                  {item}
                </li>
              ))}
              <li className="flex gap-x-4 my-2 text-[16px] cursor-pointer">
                <IoLogoTwitter />
                <IoLogoPinterest />
                <BsSnapchat />
                <IoLogoApple />
              </li>
            </ul>
          </div>
          <div className="flex flex-col w-full ">
            <div className="text-[12px] sm:tracking-[1px] uppercase text-[#fdd835] mb-2.5 sm:mb-5  ">
              {"Keep up to date"}
            </div>
            <form name="subscriptionForm" className="w-full flex ">
              <input
                className="border-b border-[#fdd835] border-x-0 border-t-0 bg-transparent outline-none w-[55%] h-[34px] p-2"
                type="email"
                placeholder="Enter Email Id"
                onChange={() => {}}
                required=""
                value=""
              />
              <input
                type="submit"
                value="SUBSCRIBE"
                className="w-[45%] bg-[#fdd835] border border-[#fdd835] h-[34px] text-[13px] tracking-tight font-semibold text-[#000] p-0 cursor-pointer"
              />
            </form>
          </div>
          <div className="mt-2.5 sm:mt-5 flex flex-col gap-y-2">
            <div className="flex">
              <Link to="/" className="flex">
                <span className="text-[16px]">
                  <GiReturnArrow />
                </span>
                <span className="opacity-90 leading-[18px] text-[12px] ml-2 cursor-pointer hover:underline">
                  15 Days return policy*
                </span>
              </Link>
            </div>
            <div className="flex">
              <Link to="/" className="flex">
                <span className="text-[16px]">
                  <HiOutlineCurrencyRupee />
                </span>
                <span className="opacity-90 leading-[18px] text-[12px] ml-2 cursor-pointer hover:underline">
                  Cash on Delivery
                </span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col w-full mb-4">
            <div className="text-[12px] sm:tracking-[1px] uppercase text-[#fdd835] my-2.5 sm:my-5  ">
              {"Download the app now"}
            </div>
            <div className="flex ">
              <img
                src="https://images.bewakoof.com/web/app_android_v1.png"
                alt="download from playstore"
                className="w-[100px] cursor-pointer"
              />
              <img
                src="https://images.bewakoof.com/web/app_android_v1.png"
                alt="download from playstore"
                className="w-[100px] cursor-pointer"
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="text-[12px] sm:tracking-[1px] uppercase text-[#fdd835] mb-2.5 sm:mb-5  ">
              {"100% secure payment"}
            </div>

            <img
              src="https://images.bewakoof.com/web/secure-payments-image.png"
              alt="Secure Payment"
              className="max-w-[300px] h-[18px]"
            />
          </div>
        </div>
        <hr className="border-[#e7d0d0] border-b-2 mx-4 md:my-8 my-6" />
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 px-4">
          <div className="flex flex-col ">
            <div className="text-[#fdd835] cursor-pointer font-bold uppercase sm:text-[16px] text-[12px] my-4 mb-2.5 sm:mb-5">
              Men's clothing
            </div>
            <ul className="flex flex-col pb-2.5">
              <li className="opacity-90 leading-[18px] text-[12px] cursor-pointer hover:underline">
                Top Wear
              </li>
              {footerClothings["Mens Clothing"]["Top Wear"].map((item, i) => (
                <li
                  key={i}
                  className="opacity-90 leading-[18px] text-[12px] cursor-pointer hover:underline"
                >
                  {item}
                </li>
              ))}
            </ul>
            <ul className="flex flex-col pb-2.5">
              <li className="opacity-90 leading-[18px] text-[12px] cursor-pointer hover:underline">
                Bottom Wear
              </li>
              {footerClothings["Mens Clothing"]["Bottom Wear"].map(
                (item, i) => (
                  <li
                    key={i}
                    className="opacity-90 leading-[18px] text-[12px] cursor-pointer hover:underline"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
            <ul className="flex flex-col pb-2.5">
              <li className="opacity-90 leading-[18px] text-[12px] cursor-pointer hover:underline">
                Featured
              </li>
              {footerClothings["Mens Clothing"]["Featured"].map((item, i) => (
                <li
                  key={i}
                  className="opacity-90 leading-[18px] text-[12px] cursor-pointer hover:underline"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col ">
            <div className="text-[#fdd835] cursor-pointer font-bold uppercase sm:text-[16px] text-[12px] my-4 mb-2.5 sm:mb-5">
              Women's clothing
            </div>
            <ul className="flex flex-col pb-2.5">
              <li className="opacity-90 leading-[18px] text-[12px] cursor-pointer hover:underline">
                Women's Top Wear
              </li>
              {footerClothings["Womens Clothing"]["Women's Top Wear"].map(
                (item, i) => (
                  <li
                    key={i}
                    className="opacity-90 leading-[18px] text-[12px] cursor-pointer hover:underline"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
            <ul className="flex flex-col pb-2.5">
              <li className="opacity-90 leading-[18px] text-[12px] cursor-pointer hover:underline">
                Women's Bottom Wear
              </li>
              {footerClothings["Womens Clothing"]["Women's Bottom Wear"].map(
                (item, i) => (
                  <li
                    key={i}
                    className="opacity-90 leading-[18px] text-[12px] cursor-pointer hover:underline"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
            <ul className="flex flex-col pb-2.5">
              <li className="opacity-90 leading-[18px] text-[12px] cursor-pointer hover:underline">
                Bags
              </li>
              {footerClothings["Womens Clothing"]["BAGS"].map((item, i) => (
                <li
                  key={i}
                  className="opacity-90 leading-[18px] text-[12px] cursor-pointer hover:underline"
                >
                  {item}
                </li>
              ))}
            </ul>
            <ul className="flex flex-col pb-2.5">
              <li className="opacity-90 leading-[18px] text-[12px] cursor-pointer hover:underline">
                Featured
              </li>
              {footerClothings["Womens Clothing"]["Featured"].map((item, i) => (
                <li
                  key={i}
                  className="opacity-90 leading-[18px] text-[12px] cursor-pointer hover:underline"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col ">
            <div className="text-[#fdd835] cursor-pointer font-bold uppercase sm:text-[16px] text-[12px] my-4 mb-2.5 sm:mb-5">
              Mobile Covers
            </div>
            <ul className="flex flex-col pb-2.5">
              {footerClothings[" Mobile Covers"]["Brands"].map((item, i) => (
                <li
                  key={i}
                  className="opacity-90 leading-[18px] text-[12px] cursor-pointer hover:underline"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex sm:flex-col gap-x-4 sm:divide-x-0 divide-x-2 divide-[#51cccc]">
            <div className="text-[#51cccc] font-bold uppercase text-[12px] my-4 mb-2.5 sm:mb-5 sm:text-start sm:text-[16px] text-center w-full cursor-pointer hover:underline">
              Fanbook
            </div>
            <div className="text-[#51cccc] font-bold uppercase text-[12px] my-4 mb-2.5 sm:mb-5 sm:text-start sm:text-[16px] text-center w-full cursor-pointer hover:underline">
              offers
            </div>
            <div className="text-[#51cccc] font-bold uppercase text-[12px] my-4 mb-2.5 sm:mb-5 sm:text-start sm:text-[16px] text-center w-full cursor-pointer hover:underline">
              sitemap
            </div>
          </div>
        </div>
        <hr className="border-[#e7d0d0] border-b-2 mx-4 md:my-8 my-6" />
        <div className="flex justify-evenly px-4 flex-col sm:flex-row">
          <div className="text-[13px] flex-1">
            This is not a real Bewakoof website
          </div>
          <div className="text-[13px] flex-1 sm:text-center">
            Made with ❤ by{" "}
            <span className="text-[#fdd835] font-semibold cursor-pointer ">
              <Link to={"/"}>Sagnik</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
