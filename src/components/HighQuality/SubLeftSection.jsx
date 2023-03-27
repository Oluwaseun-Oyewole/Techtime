import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { buttonsGroup1, buttonsGroup2 } from "../../utils/data";

const ParentContainer = styled.div`
  margin-top: 30px;
`;

const ButtonGroup1 = styled.div`
  ${tw`gap-4 md:gap-10 w-[82%] flex items-center flex-col md:flex-row`};

  > div {
    padding: 12px 20px 12px 20px;
  }
  > div:first-child {
    width: 50%;
  }

  > div:nth-child(2) {
    width: 50%;
  }

  @media screen and (max-width: 700px) {
    width: 100%;

    > div:first-child {
      width: 80%;
    }

    > div:nth-child(2) {
      width: 80%;
    }
  }
`;

const ButtonGroup2 = styled.div`
  ${tw` gap-4 md:gap-10 w-[90%] flex mt-3 items-center flex-col md:flex-row`};

  > div {
    padding: 12px 20px 12px 20px;
  }
  > div:first-child {
    width: 50%;
  }

  > div:nth-child(2) {
    width: 50%;
  }

  @media screen and (max-width: 700px) {
    width: 100%;

    > div:first-child {
      width: 80%;
    }

    > div:nth-child(2) {
      width: 80%;
    }
  }
`;

const Flex = styled.div`
  ${tw`flex items-center justify-center gap-5 bg-white shadow-lg`};
  border-radius: 7px;
`;

const Text = styled.p`
  ${tw`font-bold md:text-sm`};
`;

export const ButtonGroup = () => {
  return (
    <ParentContainer>
      <ButtonGroup1>
        {buttonsGroup1?.map((item, index) => (
          <Flex key={index}>
            <img src={item.imgSrc} />
            <Text>{item.title}</Text>
          </Flex>
        ))}
      </ButtonGroup1>

      <ButtonGroup2>
        {buttonsGroup2?.map((item, index) => (
          <Flex key={index}>
            <img src={item.imgSrc} />
            <Text>{item.title}</Text>
          </Flex>
        ))}
      </ButtonGroup2>
    </ParentContainer>
  );
};
