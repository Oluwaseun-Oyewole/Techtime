import React from "react";
import { Container } from "..";
import { LeftSection } from "./LeftSection";
import { RightSection } from "./RightSection";
import styled from "styled-components";
import tw from "twin.macro";
import { AbsoluteImages } from "..";

const SectionContainer = styled.div`
  ${tw`flex items-center justify-between gap-10`}

  @media screen and (max-width: 1024px) {
    ${tw`flex-col text-center pt-10 `}

    > div:nth-child(1) {
      width: 100%;

      > div {
        > h2 {
          ${tw`text-xl `}
        }

        p {
          ${tw`text-base`}
        }

        Button {
        }
      }
    }

    > div:nth-child(2) {
      width: 350px;
      margin-top: 30px;
    }
  }

  @media screen and (min-width: 768px) {
    > div:nth-child(2) {
      width: 650px;
      margin-top: 100px;
    }
  }
`;
export const HighQuality = () => {
  return (
    <div className="relative bg-qualityBg">
      <AbsoluteImages
        src="/assets/img/quality4.png"
        className="hidden md:block absolute w-14 right-0 top-14"
      />

      <Container>
        <SectionContainer>
          <div className="w-[45%] pt-30">
            <LeftSection />
          </div>
          <div className="w-[55%]">
            <RightSection />
          </div>
        </SectionContainer>
      </Container>

      <AbsoluteImages
        src="/assets/img/quality5.png"
        className=" absolute w-3 right-[300px] bottom-10"
      />

      <AbsoluteImages
        src="/assets/img/quality3.png"
        className="absolute w-7 md:w-12 right-0 bottom-[170px] md:right-0 md:bottom-5"
      />
    </div>
  );
};
