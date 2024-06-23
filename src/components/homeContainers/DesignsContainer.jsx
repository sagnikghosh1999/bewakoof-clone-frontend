import React from "react";
import { Link } from "react-router-dom";

const DesignsContainer = () => {
  return (
    <div className=" flex flex-col mt-4 md:mt-8">
      <div className=" w-full px-4 pb-2 lg:px-5 sm:px-auto font-[600] text-[20px] tracking-[2px] md:text-center">
        DESIGNS OF THE WEEK{" "}
      </div>
      <div className="w-full flex ">
        <div className="flex-1 cursor-pointer">
          <Link to="/men">
            <img
              src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Men-refresh-1675419582.png"
              alt=""
              className="w-full"
            />
          </Link>
        </div>
        <div className="flex-1 cursor-pointer">
          <Link to="/women">
            <img
              src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women-refresh-1675419583.png"
              alt=""
              className="w-full"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesignsContainer;
