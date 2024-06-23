import React from "react";
import HeaderBottom from "../components/header/HeaderBottom";
import HeaderTop from "../components/header/HeaderTop";
import Navbar from "../components/navbar/Navbar";
import Slider from "../components/slider/Slider";

import {
  accessoriesItems,
  homeSlides,
  offerSlides,
  categoryImages,
  categorybagImages,
  offerItems,
  bestPickItems,
  homeImages,
} from "../assets/data/Carousels";
import HomeImageContainer from "../components/homeContainers/HomeImageContainer";
import DesignsContainer from "../components/homeContainers/DesignsContainer";
import CategoriesContainer from "../components/homeContainers/CategoriesContainer";
import ProductsContainer from "../components/homeContainers/HomeProductsContainer";
import OffersContainer from "../components/homeContainers/OffersContainer";
import Footer from "../components/footer/Footer";
import MobileHeader from "../components/header/MobileHeader";
import MobileNavigation from "../components/navbar/MobileNavigation";
import MobileBottomNavigation from "../components/navbar/MobileBottomNavigation";
import { productData } from "../assets/data/data";
import ResponsiveImageContainer from "../components/homeContainers/ResponsiveImageContainer";

const Home = () => {
  return (
    <div className="">
      <div className="fixed hidden sm:block top-0 z-50">
        <HeaderTop />
        <HeaderBottom />
        <Navbar />
      </div>
      <div className="fixed sm:hidden top-0 z-50">
        <MobileHeader />
      </div>

      <div className="mt-14 sm:mt-[8.1rem] lg:mt-[8.6rem] sm:px-4 lg:px-5">
        <div className="sm:hidden">
          <MobileNavigation />
        </div>
        <Slider data={homeSlides} />
      </div>
      <div className="w-full sm:px-4 my-2 lg:my-4 lg:px-5">
        <ResponsiveImageContainer
          altText={"Own Your crazy"}
          desktopImg={
            "https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-6-1669115141.jpg"
          }
          mobileImg={
            "https://images.bewakoof.com/uploads/grid/app/own-your-crazy-common-1669022424.gif"
          }
        />
      </div>
      <div className="h-full w-full sm:px-4 my-2 lg:my-4 lg:px-5 px-auto">
        <HomeImageContainer homeImages={homeImages} />
      </div>
      <DesignsContainer />
      <CategoriesContainer
        title={"Trending Categories"}
        categoryImages={categoryImages}
      />
      <ProductsContainer productData={productData} />
      <OffersContainer title={"To hot to be missed"} itemsimages={offerItems} />
      <CategoriesContainer
        title={"Categories to bag"}
        categoryImages={categorybagImages}
      />
      <div className="mt-4 md:mt-6 sm:px-4 lg:px-5">
        <Slider data={offerSlides} />
      </div>
      <div className="w-full sm:px-4 my-2 lg:my-4 lg:px-5">
        <ResponsiveImageContainer
          altText={"Step up your shoe game"}
          desktopImg={
            "https://images.bewakoof.com/uploads/grid/app/shoe-strip-1675085026.jpg"
          }
          mobileImg={
            "https://images.bewakoof.com/uploads/grid/app/shoe-game-strip-1675085025.jpg"
          }
        />
      </div>

      <CategoriesContainer
        title={"top accessories"}
        categoryImages={accessoriesItems}
      />
      <OffersContainer title={"Our Best Picks"} itemsimages={bestPickItems} />
      <div className="w-full  mt-2 ">
        <ResponsiveImageContainer
          altText={"survey"}
          desktopImg={
            "https://images.bewakoof.com/uploads/grid/app/desktop-survey-1673330211.jpg"
          }
          mobileImg={
            "https://images.bewakoof.com/uploads/grid/app/tell-us-strip-1673249497.jpg"
          }
        />
      </div>
      <div className="w-full  mt-2 ">
        <ResponsiveImageContainer
          altText={"tribe MemberShip"}
          desktopImg={
            "https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1672040129.jpg"
          }
          mobileImg={
            "https://images.bewakoof.com/uploads/grid/app/tribe-strip-3-1672040131.jpg"
          }
        />
      </div>
      <div className="w-full mt-2 ">
        <ResponsiveImageContainer
          altText={"Vote for Designs"}
          desktopImg={
            "https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg"
          }
          mobileImg={
            "https://images.bewakoof.com/uploads/grid/app/vote-new-strip-1668601420.jpg"
          }
        />
      </div>
      <Footer />
      <div className="sm:hidden">
        <MobileBottomNavigation />
      </div>
    </div>
  );
};

export default Home;
