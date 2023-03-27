import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "..";
import { ButtonGroup } from "./SubLeftSection";
import { AbsoluteImages } from "..";

const ContentTitle = styled.h2`
  ${tw`text-3xl md:text-5xl mt-5 font-extrabold`};
`;

const ContentText = styled.p`
  ${tw` pt-5 pb-5 text-body text-sm md:text-base `}
`;

export const LeftSection = () => {
  return (
    <div className="relative">
      <div className="relative">
        <AbsoluteImages
          src="/assets/img/quality6.png"
          className="w-10 absolute -top-6 -left-4 md:-left-6"
        />
        <ContentTitle className="clash-display">
          High quality video, audio & live classes
        </ContentTitle>
      </div>
      <ContentText className="satoshi">
        High-defination video is video of higher resolution and quality than
        standard definition. while there’s no standard meaning for high
        definition, generally any standard video image
      </ContentText>

      <Button
        children="View Courses"
        primary="#004DB3"
        // width
        paddingY={35}
        paddingX={18}
        border={5}
        mediaQuery={true}
      />
      <ButtonGroup />
    </div>
  );
};
