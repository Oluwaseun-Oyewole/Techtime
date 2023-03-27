import React from "react";
import { BannerSection } from "../BannerOptions";
import { optionsImages } from "../../utils/data";

export const Options = () => {
  return (
    <BannerSection
      imgUrl={optionsImages}
      classname="h-full w-[400px] md:w-full"
    />
  );
};
