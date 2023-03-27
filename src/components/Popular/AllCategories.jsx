import React from "react";
import { populardata } from "../../utils/data";
import { PopularCardContainer } from "..";

export const AllCategories = () => {
  return <PopularCardContainer data={populardata} />;
};
