import React from "react";
import { SubServiceLeft } from "./SubServiceLeft";
import { SubServiceRight } from "./SubServiceRight";
import { Container } from "..";
import styled from "styled-components";
import tw from "twin.macro";
import { AbsoluteImages } from "..";

const ParentContainer = styled.div`
  ${tw`flex justify-between pt-14 lg:pt-20 gap-10 xl:gap-20`}

  > div:first-child {
    flex-basis: 45%;
  }

  > div:last-child {
    flex-basis: 55%;
  }

  @media screen and (max-width: 991px) {
    flex-direction: column;
    gap: 0;

    > div:first-child {
      text-align:center;
      width: 100%;

      > img {
        width: 100%

    > div:last-child {
      width: 100%;
    }
  }
`;
export const Services = () => {
  return (
    <div className="relative bg-qualityBg pb-20">
      <AbsoluteImages
        src="/assets/img/service1.png"
        className=" hidden lg:block absolute w-16 right-[400px] top-10"
      />
      <Container>
        <ParentContainer>
          <SubServiceLeft />
          <SubServiceRight />
        </ParentContainer>
      </Container>

      <AbsoluteImages
        src="/assets/img/service2.png"
        className=" hidden lg:block absolute w-5 left-5 bottom-16"
      />

      <AbsoluteImages
        src="/assets/img/service3.png"
        className="absolute w-3 md:w-6 right-0 bottom-[580px] md:right-10 md:-bottom-0"
      />
    </div>
  );
};
