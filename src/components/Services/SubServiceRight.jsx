import React from "react";
import { servicesdata } from "../../utils/data";
import styled from "styled-components";
import tw from "twin.macro";
import { AbsoluteImages } from "..";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-top: 35px;

  @media screen and (max-width: 500px) {
    // grid-template-columns: 1fr;
    display: block;
    margin-top: 35px;
  }
`;
export const SubServiceRight = () => {
  return (
    <CardContainer>
      {servicesdata?.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-white w-[100%] overflow-hidden p-4 mt-5 rounded-lg shadow-lg hover:cursor-pointer hover:scale-105 hover:transition-all ease-in-out duration-500"
          >
            <img src={item.imgSrc} alt="" className="w-10" />
            <div className="pt-3 md:pt-2 md:pb-2 font-extrabold text-xl">
              {item.title}
            </div>
            <p className="text-body font-medium leading-6 text-sm md:text-base pb-5 pt-2 md:pt-0">
              {item.body}
            </p>
          </div>
        );
      })}
    </CardContainer>
  );
};
