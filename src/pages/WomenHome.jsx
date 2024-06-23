import React from "react";
import HeaderBottom from "../components/header/HeaderBottom";
import HeaderTop from "../components/header/HeaderTop";
import Slider from "../components/slider/Slider";

import HomeImageContainer from "../components/homeContainers/HomeImageContainer";
import CategoriesContainer from "../components/homeContainers/CategoriesContainer";
import ProductsContainer from "../components/homeContainers/HomeProductsContainer";
import OffersContainer from "../components/homeContainers/OffersContainer";
import Footer from "../components/footer/Footer";
import MobileHeader from "../components/header/MobileHeader";
import MobileBottomNavigation from "../components/navbar/MobileBottomNavigation";
import {
  womenBestPickItems,
  womenCategories,
  womenImages,
  womenOfferItems,
  womenOfferSlides,
  womenSlides,
} from "../assets/data/womensData";
import { productData } from "../assets/data/data";
import ResponsiveImageContainer from "../components/homeContainers/ResponsiveImageContainer";

const Home = () => {
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
        <Slider data={womenSlides} />
      </div>
      <div className="w-full sm:px-4 my-2 lg:my-4 lg:px-5">
        <ResponsiveImageContainer
          altText={"Own your crazy"}
          desktopImg={
            "https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-6-1669217199.jpg"
          }
          mobileImg={
            "https://images.bewakoof.com/uploads/grid/app/gif-strip-tod-women-1668601419.gif"
          }
        />
      </div>
      <div className="h-full w-full sm:px-4 my-2 lg:my-4 lg:px-5 px-auto">
        <HomeImageContainer homeImages={womenImages} />
      </div>

      <CategoriesContainer
        title={"Trending Categories"}
        categoryImages={womenCategories}
      />
      <ProductsContainer
        productData={productData.filter((item) =>
          item.category.toLowerCase().includes("women")
        )}
      />
      <OffersContainer
        title={"To hot to be missed"}
        itemsimages={womenOfferItems}
      />

      <div className="mt-4 md:mt-6 sm:px-4 lg:px-5">
        <Slider data={womenOfferSlides} />
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
      <div className="w-full sm:px-4 my-2 lg:my-4 lg:px-5">
        <ResponsiveImageContainer
          altText={"Women's Survey"}
          desktopImg={
            "https://images.bewakoof.com/uploads/grid/app/desktop-strip-2022-survey-1675149994.jpg"
          }
          mobileImg={
            "https://images.bewakoof.com/uploads/grid/app/thin-strip-new-survey-1675149995.jpg"
          }
        />
      </div>

      <OffersContainer
        title={"Our Best Picks"}
        itemsimages={womenBestPickItems}
      />
      <div className="w-full  mt-2 ">
        <ResponsiveImageContainer
          altText={"tribe MemberShip"}
          desktopImg={
            "https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-1-1672040128.jpg"
          }
          mobileImg={
            "  https://images.bewakoof.com/uploads/grid/app/tribe-strip-2-1672040130.jpg"
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
