import React from "react";
import { Container } from "..";
import styled from "styled-components";
import tw from "twin.macro";
import { socials } from "../../utils/data";
import { Form } from "./Form";

const Links = styled.ul`
  li {
    list-style: none;
    font-family: satoshi;
    ${tw`py-[7px]`}
    > a {
    }
  }
`;

const FlexContainer = styled.div`
  ${tw`flex-col lg:flex-row flex justify-between items-start`}

  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const Footer = () => {
  return (
    <div className="bg-footer text-white mt-20 pt-20 pb-32">
      <Container>
        <FlexContainer>
          <div>
            <img src="/assets/img/Frame 260.png" alt="logo" />
            <p className="py-5">
              Reach out to us on any of our social media networks
            </p>

            <div className="flex items-center justify-start gap-5 ">
              {socials?.map((social, index) => (
                <a href="#" key={index}>
                  <social.icon
                    size={social.size}
                    color={social.color}
                    key={index}
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-10 pb-8 md:pt-0 md:pb-0">
            <h3 className=" text-2xl md:text-3xl md:pt-14 lg:pt-0 py-3 font-medium clash-display">
              Useful Links
            </h3>
            <Links>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Courses</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Our community</a>
              </li>
            </Links>
          </div>

          <div className="pb-6 md:pb-0">
            <h3 className="text-2xl md:text-3xl md:pt-14 lg:pt-0 py-3 font-medium clash-display">
              Community
            </h3>
            <Links>
              <li>
                <a href="#">Help centers</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
              <li>
                <a href="#">Suggestion</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
            </Links>
          </div>

          <div>
            <h1 className=" text-2xl  md:pt-14 lg:pt-0 md:text-3xl py-3 font-medium clash-display">
              Subscribe Us
            </h1>
            <Form />
          </div>
        </FlexContainer>
      </Container>
    </div>
  );
};
