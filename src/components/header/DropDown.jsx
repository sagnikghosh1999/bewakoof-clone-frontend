import React from "react";
import { Link } from "react-router-dom";
import { menCategories } from "../../assets/data/data";
const SPECIAL_CATEGORIES = [
  {
    url: "https://images.bewakoof.com/nav_menu/Anime-Bewakoof-Homepage-NavigationCircleIcon-final-1632292125.jpg",
    title: "Anime Collection",
  },
  {
    url: "https://images.bewakoof.com/nav_menu/navi-collab-icon-1579514101.gif",
    title: "Collaboration",
  },
  {
    url: "https://images.bewakoof.com/nav_menu/nav-icon-1617643368.png",
    title: "Shop Unique Brands",
  },
  {
    url: "https://images.bewakoof.com/nav_menu/new-arrival-icon-1625237098.png",
    title: "Upcoming Collection",
  },
  {
    url: "https://images.bewakoof.com/nav_menu/bewakoof-men-logo-last-size-1592822253.png",
    title: "Last Size Left",
  },
];

const DropDown = ({ category }) => {
  return (
    <div className="top-0 left-0 absolute xl:mt-[4.6rem] mt-[4.1rem] z-20  w-screen h-full">
      <div className="mx-4  xl:w-[75%] xl:mx-auto h-[428px] bg-white border border-t-0 border-[#121212] py-1">
        <div className="w-full h-full grid grid-cols-5 xl:px-16 px-8 py-3  divide-x">
          <div className="grid grid-cols-3 col-span-3 overflow-y-scroll scrollbar-hide">
            <div className="h-full ">
              <h3 className="text-[#262626] font-[530] text-sm lg:text-base  py-1">
                Topwear
              </h3>
              {menCategories.Topwear.map((data, i) => (
                <Link to="/products" key={i}>
                  <li className="text-[14px] opacity-75 list-none py-0.5 font-thin hover:underline">
                    {data}
                  </li>
                </Link>
              ))}
            </div>
            <div className="h-full ">
              <h3 className="text-[#262626] font-[530] text-sm lg:text-base  py-1">
                Bottomwear
              </h3>
              {menCategories.Bottomwear.map((data, i) => (
                <Link to="/products" key={i}>
                  <li className="text-[14px] opacity-75 list-none py-0.5 font-thin hover:underline">
                    {data}
                  </li>
                </Link>
              ))}
            </div>
            <div className="h-full ">
              <h3 className="text-[#262626] font-[530] text-sm lg:text-base  py-1">
                Winterwear
              </h3>
              {menCategories.Winterwear.map((data, i) => (
                <Link to="/products" key={i}>
                  <li className="text-[14px] opacity-75 list-none py-0.5 font-thin hover:underline">
                    {data}
                  </li>
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-2 bg-[#ffffff] h-full px-6 ">
            <h3 className="text-[#262626] font-[500] text-sm lg:text-base pt-1 pb-2">
              Specials
            </h3>
            <ul className="flex flex-col gap-y-2 flex-1">
              {SPECIAL_CATEGORIES.map((item, i) => (
                <li key={i}>
                  <Link
                    to="/"
                    className="flex items-center gap-x-2 h-6 rounded-full"
                  >
                    <img src={item.url} alt="" className="h-5 rounded-full" />
                    <span className="text-[14px] opacity-75 list-none py-0.5 font-thin hover:underline">
                      {item.title}
                    </span>
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

export default DropDown;
