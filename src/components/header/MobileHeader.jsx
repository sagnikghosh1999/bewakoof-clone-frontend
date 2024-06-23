import React, { useState } from "react";
import { BsChevronRight } from "react-icons/bs";

import { Link } from "react-router-dom";
import { aboutItems, categories, contactItems } from "../../assets/data/data";

const MobileHeader = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="w-screen bg-[#fff] border-b border-[#757575]/[0.3] shadow-sm">
      <div className="flex w-full h-14 items-center justify-start">
        <div
          className="pl-4 pr-2 cursor-pointer"
          onClick={() => setOpenSidebar((prev) => !prev)}
        >
          <img
            src="https://images.bewakoof.com/web/ic-web-head-hamburger.svg"
            alt="menu"
            className="h-6 w-6"
          />
        </div>
        <div className="cursor-pointer">
          <Link to="/">
            <img
              src="https://images.bewakoof.com/web/ic-web-head-bwk-primary-logo-eyes.svg"
              alt="Bewakoof logo"
              className="h-[18px] w-10 my-4"
            />
          </Link>
        </div>
        <div className="flex-1"></div>
        <div className="flex mx-4">
          <div className="py-3.5 px-2 cursor-pointer ">
            <img
              src="https://images.bewakoof.com/web/ic-web-head-search.svg"
              alt="search icon"
              className="h-6 w-6"
            />
          </div>
          <div className="py-3.5 px-2 cursor-pointer ">
            <img
              src="	https://images.bewakoof.com/web/ic-web-head-wishlist.svg"
              alt="search icon"
              className="h-6 w-6"
            />
          </div>
          <div className="py-3.5 px-1 cursor-pointer">
            <img
              src="	https://images.bewakoof.com/web/ic-web-head-cart.svg"
              alt="search icon"
              className="h-6 w-6"
            />
          </div>
        </div>
      </div>
      {openSidebar && (
        <div
          onClick={() => setOpenSidebar((prev) => !prev)}
          className="fixed cursor-pointer z-40 inset-0 bg-gray-600/30"
        ></div>
      )}
      <div
        className={`${
          openSidebar
            ? "bg-white overflow-x-hidden z-[100]  overflow-y-scroll scrollbar-hide translate-x-[0%] duration-500 drop-shadow-[0_35px_135px_rgba(0,0,0,0.5)] h-full fixed w-[70%] left-0 bottom-0"
            : "bg-white  -translate-x-[300%] duration-500 drop-shadow-[0_35px_135px_rgba(0,0,0,0.5)] h-full fixed w-[25%]  left-0 bottom-0"
        }`}
        id="sidebar-wrapper"
        onClick={() => setOpenSidebar((prev) => !prev)}
      >
        <div className=" w-full py-4 px-5 flex flex-col border-b border-[#757575]">
          <p className="font-bold text-[16px]">Welcome {"Guest"}</p>
          <p className="text-[14px] text-[#757575] font-semibold py-2.5">
            {" "}
            Login / Sign Up
          </p>
        </div>
        {/* categories  */}
        <div className="flex flex-col ">
          <div className="mt-2.5 px-5 flex items-center justify-between">
            <div className="flex items-center cursor-pointer">
              <img
                src="https://images.bewakoof.com/web/india-flag-round-1639566913.png"
                alt="indian flag"
                className="h-[30px]"
              />
              <div className="ml-4 font-bold">India</div>
            </div>
            <div className="text-[#757575] text-[20px]">
              <BsChevronRight />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-[13px] text-[#000]/[0.3] pt-3.5 pb-[5px] px-5">
              SHOP IN
            </div>
            <ul className="flex flex-col ">
              {categories.map((item, i) => (
                <Link to={`/${item.title.toLowerCase()}`} key={i}>
                  <li className="h-12 flex px-5 cursor-pointer items-center justify-between text-[14px] font-bold text-[#333]">
                    <span>{item.title}</span>
                    <img
                      src={item.url}
                      alt={item.title}
                      className="h-[30px] rounded-full"
                    />
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex flex-col bg-[rgb(243,243,243)]">
            <div className="font-bold text-[13px] text-[#000]/[0.3] pt-3.5 pb-[5px] px-5">
              CONTACT US
            </div>
            <ul className="flex flex-col ">
              {contactItems.map((item, i) => (
                <li
                  key={i}
                  className="h-12 flex px-5 items-center justify-between text-[14px] font-bold text-[#333]"
                >
                  <Link to={item.url}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col bg-[rgb(243,243,243)]">
            <div className="font-bold text-[13px] text-[#000]/[0.3] pt-3.5 pb-[5px] px-5">
              ABOUT US
            </div>
            <ul className="flex flex-col ">
              {aboutItems.map((item, i) => (
                <li
                  key={i}
                  className="h-12 flex px-5 items-center justify-between text-[14px] font-bold text-[#333]"
                >
                  <Link to={item.url}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
