import React from "react";
import { Container } from "..";
import { Tab } from "../customTab/Tab";
import { AllCategories } from "./AllCategories";
import { Design } from "./Design";
import { Development } from "./Development";
import { Marketing } from "./Marketing";
import { Content } from "..";
import { Button } from "..";
import { AbsoluteImages } from "..";

export const Courses = () => {
  return (
    <div className="pt-10 md:pt-20 bg-qualityBg relative">
      <Container>
        <AbsoluteImages
          src="/assets/img/star (2).png"
          className=" absolute w-7 -top-[50px] lg:left-[100px] lg:top-[130px]"
        />

        <Content
          title="browse our popular courses"
          description="high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image"
          capitalize={true}
        />
        <div className="pt-5 md:pt-10">
          <Tab
            tabs={[
              {
                index: 0,
                title: "All Categories",
                component: () => <AllCategories />,
              },
              {
                index: 1,
                title: "Design",
                component: () => <Design />,
              },

              {
                index: 2,
                title: "Development",
                component: () => <Development />,
              },

              {
                index: 3,
                title: "Marketing",
                component: () => <Marketing />,
              },
            ]}
          />
        </div>

        <div className="flex items-center justify-center py-12">
          <Button
            children="Explore All Courses"
            // width
            primary="#004DB3"
            paddingX={22}
            paddingY={45}
            color="#fff"
            border={5}
            mediaQuery={true}
          />
        </div>
      </Container>
    </div>
  );
};
