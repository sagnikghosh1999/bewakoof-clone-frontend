import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { filterItems } from "../../assets/data/data";

const FilterContainer = () => {
  const [active, setActive] = useState("");
  return (
    <div className="py-3 ">
      <div className="text-[rgba(45,45,45,.5)] text-[13px] font-bold px-2">
        FILTERS
      </div>
      <ul className="flex flex-col">
        {filterItems.map((item, i) => (
          <li
            className="list-none border-b border-[#757575] pt-4 pb-[18px]"
            key={i}
          >
            <div
              className=" flex justify-between px-2 capitalize cursor-pointer  text-left py-1 text-[13px] font-semibold text-gray-700"
              onClick={() => {
                if (active === item.title) setActive("");
                else setActive(item.title);
              }}
            >
              <span>{item.title}</span>
              <span
                className={`text-[16px] transition duration-300 ${
                  active === item.title ? " rotate-180" : "rotate-0"
                } `}
              >
                <BsChevronDown />
              </span>
            </div>
            {active === item.title && (
              <ul className="transition duration-300">
                {item.value.map((item, i) => (
                  <li
                    key={i}
                    className="list-none  text-[12px] text-[rgba(45,45,45,.7)]  px-[10px] py-1.5"
                  >
                    <span
                      className={`px-5  font-semibold ${
                        active === "sizes" ? "uppercase" : "capitalize"
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterContainer;
