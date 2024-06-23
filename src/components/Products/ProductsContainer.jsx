import React from "react";
import { Link } from "react-router-dom";
import FilterContainer from "./FilterContainer";
import ProductCard from "./ProductCard";

const ProductsContainer = ({ productData }) => {
  return (
    <div className="xl:w-[80%] xl:mx-auto md:mx-6 flex sm:mx-4 mx-2 min-h-[628px] relative h-full gap-x-4 ">
      <div className="hidden md:inline-block w-72 lg:w-96  sticky md:top-[4.1rem] lg:top-[4.6rem] h-[640px]  overflow-y-scroll scrollbar-hide ">
        <FilterContainer />
      </div>
      <ul className="w-full grid  sm:grid-cols-3 grid-cols-2 p-2">
        {productData.map((item, i) => (
          <Link to={`/product/${item.title}`} key={i}>
            <ProductCard product={item} grid />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ProductsContainer;
