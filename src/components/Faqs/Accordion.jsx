import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const AccordionSection = styled.div``;
const AccordionContainer = styled.div``;
const AccordionWrapper = styled.div``;
const Wrap = styled.div`
  ${tw`flex items-center justify-between gap-3 py-5 `}
`;

const AccordionTitle = styled.h4`
  ${tw`lg:text-2xl md:text-xl font-extrabold cursor-pointer w-10/12 md:w-full`}
`;

const AccordionDescription = styled.p`
  ${tw`pb-4 text-base  text-body font-medium ease-in-out duration-300 -mt-2`}
  color:#000f24;
`;

export const Accordion = ({ data }) => {
  const [clicked, setClicked] = useState();

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(-1);
    }
    setClicked(index);
  };

  return (
    <>
      <AccordionSection>
        <AccordionContainer>
          {data?.map((item, index) => {
            return (
              <AccordionWrapper
                className={"border-b-2 border-primary"}
                key={index}
              >
                <Wrap onClick={() => toggle(index)} key={index}>
                  <AccordionTitle className={`${clicked === index && "color"}`}>
                    {item?.text}
                  </AccordionTitle>
                  {clicked === index ? (
                    <AiOutlineMinus className="cursor-pointer" />
                  ) : (
                    <AiOutlinePlus className="cursor-pointer" />
                  )}
                </Wrap>

                <div className="font-semibold transition-all ease-in-out duration-300 ">
                  {clicked === index ? (
                    <AccordionDescription>
                      {item?.description}
                    </AccordionDescription>
                  ) : null}
                </div>
              </AccordionWrapper>
            );
          })}
        </AccordionContainer>
      </AccordionSection>
    </>
  );
};
