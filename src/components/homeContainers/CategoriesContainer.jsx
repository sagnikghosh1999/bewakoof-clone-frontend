import React from "react";
import { Link } from "react-router-dom";

const CategoriesContainer = ({ title, categoryImages }) => {
  return (
    <div className=" flex flex-col mt-4 md:mt-8">
      <div className=" w-full px-4 pb-2 lg:px-5 uppercase sm:px-auto font-[600] text-[20px] tracking-[2px] md:text-center">
        {title}
      </div>
      <div className="grid sm:grid-cols-6 grid-cols-3 lg:px-3 ">
        {categoryImages.map((item, i) => (
          <li className="block overflow-hidden" key={i}>
            <Link to="/products">
              <img
                src={item.url}
                alt={item.title}
                className="hover:scale-105 duration-300 "
              />
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default CategoriesContainer;
