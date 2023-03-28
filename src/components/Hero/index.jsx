import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Container, Button, AbsoluteImages } from "..";
// import { Logo } from "../img/Vector-2.png";

const HeroBakcground = styled.div`
  background: #004db3;
  color: #fff;
  padding-top: 60px;
  position: relative;

  @media screen and (max-width: 960px) {
    padding-top: 40px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 960px) {
    ${tw`flex-col`}
  }
`;

const HeroContent = styled.div`
  position: relative;
  width: 50%;

  @media screen and (max-width: 960px) {
    ${tw`w-full text-center justify-center self-center`}
  }
`;
const HeroImage = styled.div`
  width: 50%;
  width: 700px;

  @media screen and (max-width: 960px) {
    ${tw`w-full`}
  }
`;

export const Hero = () => {
  return (
    <HeroBakcground>
      <Container>
        <AbsoluteImages
          src="/public/assets/img/Vector-2.png"
          alt="hero"
          className="lg:block hidden absolute w-3 left-[80px] top-4"
        />

        {/* <AbsoluteImages
          src="/assets/img/vector-3.png"
          alt="hero"
          className="lg:block hidden absolute w-2 left-[580px] top-16"
        /> */}

        <AbsoluteImages
          src={require("../img/Vector-3.png")}
          alt="hero"
          className="lg:block hidden absolute w-2 left-[580px] top-24"
        />

        <FlexContainer>
          <HeroContent>
            <h1 className="text-3xl w-full md:text-5xl lg:text-3xl xl:text-6xl font-extrabold md:w-full clash-display">
              Grow your skills to advance your career path{" "}
            </h1>
            <p className="text-sm xl:text-base lg:text-sm :w-[90%] xl:w-[85%] pt-5 md:pt-8 lg:pt-5 leading-6 md:leading-8 capitalize pb-3 md:pb-5 font-medium">
              build your future with our quality education. the best and largest
              all-in-one online tutoring platform in the world
            </p>

            {window.innerWidth > 1024 ? (
              <div className=" justify-center flex lg:justify-start gap-5 pt-5 pb-6">
                <Button
                  children="Get Started Now"
                  // width={true}
                  paddingX={14}
                  paddingY={35}
                  primary="#004DB3"
                  isBorder={true}
                  imgSrc="/assets/img/arrow.png"
                  border={2}
                  mediaQuery={true}
                />
                <Button
                  children="Enroll Now"
                  // width={true}
                  paddingX={14}
                  paddingY={30}
                  primary="#fff"
                  isBorder={true}
                  color="#004DB3"
                  border={2}
                  mediaQuery={true}
                />
              </div>
            ) : (
              <div className=" justify-center flex lg:justify-start gap-5 pt-5 md:pt-0 pb-6">
                <Button
                  children="Get Started Now"
                  // width={true}
                  paddingX={10}
                  paddingY={25}
                  primary="#004DB3"
                  isBorder={true}
                  imgSrc="/assets/img/arrow.png"
                  border={2}
                  mediaQuery={true}
                />
                <Button
                  children="Enroll Now"
                  // width={true}
                  paddingX={10}
                  paddingY={25}
                  primary="#fff"
                  isBorder={true}
                  color="#004DB3"
                  border={2}
                  mediaQuery={true}
                />
              </div>
            )}

            <div className="flex items-center justify-center lg:block w-[100%] lg:mt-0">
              <img
                src={require("../img/Vector-2.png")}
                alt="hero"
                className="hidden lg:block w-[20px] md:w-[16px] absolute -top-[160px] left-8"
              />
            </div>

            {/* <AbsoluteImages
              src="/assets/img/vector-1.png"
              alt="hero"
              className="lg:block hidden absolute lg:w-20 xl:w-28 right-0 -bottom-5 lg:-right-20 lg:-bottom-5 xl:bottom-3"
            /> */}

            <AbsoluteImages
              src={require("../img/Vector-1.png")}
              alt="hero"
              className="lg:block hidden absolute lg:w-20 xl:w-28 right-0 -bottom-5 lg:-right-20 lg:-bottom-5 xl:-bottom-3"
            />

            <AbsoluteImages
              src={"/assets/img/vectormobile.png"}
              alt="hero"
              className="lg:hidden w-14 md:w-20 absolute right-0 -bottom-10 md:right-28"
            />
          </HeroContent>

          <HeroImage className="flex items-center justify-center mt-5 md:mt-10 lg:mt-0">
            <img
              src="/assets/img/hero.png"
              alt="hero"
              className=" mt-7 md:mt-0 object-contain w-[500px] lg:w-[500px] xl:w-[630px]"
            />
          </HeroImage>
        </FlexContainer>
      </Container>
    </HeroBakcground>
  );
};
