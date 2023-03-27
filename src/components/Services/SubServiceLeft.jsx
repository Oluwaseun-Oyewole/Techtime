import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Title = styled.h2`
  ${tw` text-2xl xl:text-[45px] leading-tight capitalize font-bold pb-5`}
  font-family: clash Display;
`;

const TextContent = styled.p`
  ${tw`text-body text-sm md:text-base leading-5 md:leading-8 pb-5 font-medium capitalize`}
`;

const Image = styled.img`
  ${tw``}
`;

export const SubServiceLeft = () => {
  return (
    <div className="flex lg:block flex-col items-center">
      <Title>This is why we are best from others</Title>
      <TextContent className="weight">
        high-defination video is video of higher resolution and quality than
        standard definition. while there’s no standard meaning for high
        definition, generally any standard video image
      </TextContent>

      <Image
        src="/assets/img/Frame8.png"
        className="object-contain w-[500px] lg:w-full"
      />
    </div>
  );
};
