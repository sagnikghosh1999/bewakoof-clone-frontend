import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" w-full bg-white">
      <ul className="flex items-center justify-center text-[12px] lg:text-[16px] font-[500] xl:w-3/4 w-full h-16 mx-4 xl:mx-auto ">
        <Link to={"/"}>
          <li className="mr-3 my-2 lg:mr-7 lg:my-2.5 cursor-pointer">MEN</li>
        </Link>

        <Link to={"/"}>
          <li className="mx-3 my-2 lg:mx-7 lg:my-2.5 cursor-pointer">WOMEN</li>
        </Link>

        <Link to={"/"}>
          <li className="mx-3 my-2 lg:mx-7 lg:my-2.5 cursor-pointer">
            ACCESSORIES
          </li>
        </Link>

        <Link to={"/"}>
          <li className="mx-3 my-2 lg:mx-7 lg:my-2.5 cursor-pointer hidden md:inline-flex">
            COUPLE TEES
          </li>
        </Link>

        <Link to={"/"}>
          <li className="ml-3 my-2 lg:ml-7 lg:my-2.5 cursor-pointer hidden sm:inline-flex">
            WINTERWEAR
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
