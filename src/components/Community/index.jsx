import React from "react";
import { Container, Button } from "..";
import { Content } from "..";

export const Community = () => {
  return (
    <div className="bg-bgColor pt-10 md:pt-16 lg:pt-20">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <h1 className=" md:text-lg lg:text-xl font-medium text-white pb-5  uppercase">
            Join Our Community
          </h1>
          <Content
            title="Are you  ready to connect with the future talent of the tech world"
            description="meet up with other techstars and grow together"
            color="white"
            width
            capitalize={false}
            font
          />
          <div className="pt-10">
            <img
              src="/assets/img/community.png"
              alt="community"
              className="w-[500px] lg:w-full"
            />
          </div>
          <div className="py-10 md:py-20">
            <Button
              // width
              children="Join Our Community"
              primary={"#fff"}
              color="#004DB3"
              paddingX={18}
              paddingY={43}
              mediaQuery={true}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
