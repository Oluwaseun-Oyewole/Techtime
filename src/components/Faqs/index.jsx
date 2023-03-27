import React from "react";
import { Content, Container } from "..";
import { Faq } from "./Faq";
import { AbsoluteImages } from "..";

export const Faqs = () => {
  return (
    <div className=" pt-16 md:pt-28 relative">
      <AbsoluteImages
        src="/assets/img/faq1.png"
        className="w-10 absolute top-[225px] -left-[20px]  lg:left-0 md:top-[250px] lg:top-[300px]"
      />
      <Container>
        <Content
          title="frequently asked questions"
          description="high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image"
          capitalize={true}
        />
        <AbsoluteImages
          src="/assets/img/faq2.png"
          className="w-3 md:w-4 absolute -top-7 right-5 md:top-5 md:right-[170px]"
        />

        <AbsoluteImages
          src="/assets/img/round.png"
          className="hidden lg:block w-2 absolute bottom-7 right-[80px]"
        />

        <Faq />
      </Container>
    </div>
  );
};
