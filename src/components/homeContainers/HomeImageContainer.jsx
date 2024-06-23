import React from "react";

const HomeImageContainer = ({ homeImages }) => {
  return (
    <div className=" flex items-center justify-center mx-auto">
      <ul className="w-full overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth flex gap-1 sm:gap-4 lg:gap-6 justify-start xl:justify-center">
        {homeImages.map((img, i) => (
          <li className=" flex-shrink-0 cursor-pointer" key={i}>
            <img
              src={img.url}
              alt={img.title}
              className="h-[185px] w-[135px] sm:h-[175px] sm:w-[125px]"
            />
            <p className="mt-2 md:mt-4 text-[11px] font-[550] text-center">
              {img.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeImageContainer;
