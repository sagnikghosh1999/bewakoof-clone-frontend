import React from "react";
import { productData } from "../assets/data/data";
import Footer from "../components/footer/Footer";
import HeaderBottom from "../components/header/HeaderBottom";
import HeaderTop from "../components/header/HeaderTop";
import MobileHeader from "../components/header/MobileHeader";
import MobileBottomNavigation from "../components/navbar/MobileBottomNavigation";
import ProductDetails from "../components/Products/ProductDetails";

const ProductDetailsPage = () => {
  return (
    <div className="">
      <div className="fixed hidden sm:block top-0 z-50">
        <HeaderTop />
        <HeaderBottom />
      </div>
      <div className="fixed sm:hidden top-0 z-50">
        <MobileHeader />
      </div>
      <div className="mt-14 sm:mt-[4.1rem] lg:mt-[4.6rem] sm:px-4 lg:px-5">
        <ProductDetails product={productData[0]} />
      </div>
      <Footer />
      <div className="sm:hidden">
        <MobileBottomNavigation />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
