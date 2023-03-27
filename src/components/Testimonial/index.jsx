import React from "react";
import { Content } from "..";
import { Container } from "..";
import { TestimonialCard } from "./TestimonialCard";

export const Testimonial = () => {
  return (
    <div className="pt-5 bg-qualityBg">
      <Container>
        <Content
          title="what our clients are saying"
          description="high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image"
          capitalize
        />
      </Container>
      <TestimonialCard />
    </div>
  );
};
