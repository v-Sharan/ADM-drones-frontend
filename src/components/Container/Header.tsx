import React from "react";
import Carousel from "../Carousel";
import { Home } from "@/types/SanityResults";

const Header = ({ images }: { images: Home[] }) => {
  return <Carousel images={images} />;
};

export default Header;
