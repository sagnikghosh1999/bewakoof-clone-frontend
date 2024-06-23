import React from "react";
import { mobileNavItems } from "../../assets/data/data";

const MobileNavigation = () => {
  return (
    <div className="h-full w-full ">
      <div className=" flex items-center mx-4">
        <ul className="w-full overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth flex gap-1  justify-start ">
          {mobileNavItems.map((img, i) => (
            <li
              className=" flex-shrink-0 cursor-pointer min-w-[63px] ml-2.5 my-4"
              key={i}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-[67.5px] rounded-full"
              />
              <p className="mt-2 md:mt-4 text-[11px] font-[550] text-center capitalize text-[#757575]">
                {img.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNavigation;
