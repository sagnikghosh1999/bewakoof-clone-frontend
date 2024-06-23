import React from "react";
import { Link } from "react-router-dom";

const ResponsiveImageContainer = ({ desktopImg, mobileImg, altText, url }) => {
  return (
    <Link to={url || "/"}>
      <picture>
        <source srcSet={desktopImg} media="(min-width: 640px)" />
        <img srcSet={mobileImg} alt={altText} className="w-full" />
      </picture>
    </Link>
  );
};

export default ResponsiveImageContainer;
