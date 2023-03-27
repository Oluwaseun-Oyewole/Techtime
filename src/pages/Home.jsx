import React from "react";
import { Hero } from "../components/Hero";
import { Options } from "../components/Options";
import { HighQuality } from "../components/HighQuality";
import { Services } from "../components/Services";
import { Courses } from "../components/Popular";
import { Testimonial } from "../components/Testimonial";
import { Community } from "../components/Community";
import { Faqs } from "../components/Faqs";

export const Home = () => {
  return (
    <>
      <Hero />
      <Options />
      <HighQuality />
      <Services />
      <Courses />
      <Testimonial />
      <Community />
      <Faqs />
    </>
  );
};
