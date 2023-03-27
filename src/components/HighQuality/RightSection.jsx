import React from "react";
export const RightSection = () => {
  return (
    <div className="relative md:w-[600px]  lg:w-[700px] md:h-[580px] md:-ml-10 -mt-4 md:-mt-16 lg:-mt-10 xl:mt-0">
      <img
        src={"/assets/svg/desktop.svg"}
        alt="hero"
        className="hidden md:block"
      />
      <img src={"/assets/svg/mobile.svg"} alt="hero" className="md:hidden" />
    </div>
  );
};
