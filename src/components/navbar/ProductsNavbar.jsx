import React from "react";
import { Link } from "react-router-dom";

const ProductsNavbar = ({
  category,
  subcategory,
  design,
  productCount,
  searchquery,
}) => {
  return (
    <>
      {" "}
      <div className="xl:w-[80%] xl:mx-auto md:mx-6 sm:mx-4 mx-2 py-4">
        {!searchquery && (
          <div className="flex text-[12px] text-[#2d2d2d] overflow-x-scroll scrollbar-hide">
            <Link className="mr-3  flex-shrink-0  hover:underline" to={"/"}>
              Home
            </Link>
            {category && (
              <>
                /
                <Link
                  className="mx-3 flex-shrink-0  capitalize hover:underline"
                  to={`/${category}`}
                >
                  {category}'s clothing
                </Link>
              </>
            )}
            {subcategory && (
              <>
                /
                <Link
                  className="mx-3 flex-shrink-0  capitalize hover:underline"
                  to={"/"}
                >
                  {`${category}'s ${subcategory}`}
                </Link>
              </>
            )}
            {design && (
              <>
                /
                <li className="mx-3  flex-shrink-0 list-none capitalize">
                  {`${design} ${subcategory} for ${category}`}
                </li>
              </>
            )}
          </div>
        )}

        <div className="mt-4 sm:mt-6 lg:mt-10">
          <div className="flex items-center capitalize">
            <h2 className="font-bold text-[24px] capitalize">
              {searchquery
                ? `showing results for "${searchquery}"`
                : `${design} ${subcategory} for ${category}`}
            </h2>
            <span className="text-[24px] text-[#949494] ml-2">
              ({productCount})
            </span>
          </div>
          <div className="w-[117px] h-[2px] bg-[#fbd139] mt-[6px] mr-[2px]"></div>
        </div>
      </div>
    </>
  );
};

export default ProductsNavbar;
