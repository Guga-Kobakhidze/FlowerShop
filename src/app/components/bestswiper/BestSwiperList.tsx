"use client";

import { Box } from "@mui/material";
import React from "react";
import Title from "../title/Title";
import BestSwiper from "./BestSwiper";
import { swiperBestCard } from "@/data/SwiperCardData";

const BestSwiperList = () => {
  return (
    <Box width={"100%"} mb={10}>
      <Title content="Our Best o2" />
      <BestSwiper swiperCard={swiperBestCard} />
    </Box>
  );
};

export default BestSwiperList;
