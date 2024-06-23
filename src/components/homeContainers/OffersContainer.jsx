import React from "react";
import { Link } from "react-router-dom";

const OffersContainer = ({ title, itemsimages }) => {
  return (
    <div className=" flex flex-col mt-4 md:mt-8">
      <div className=" w-full px-4 pb-2 uppercase lg:px-5 sm:px-auto font-[600] text-[20px] tracking-[2px] md:text-center">
        {title}
      </div>
      <div className="w-screen grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center items-center">
        {itemsimages.map((item, i) => (
          <div className="w-full cursor-pointer" key={i}>
            <Link to="/products">
              <img src={item.url} alt={item.title} className="w-full" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersContainer;
