"use client";

import React from "react";
import SwiperCard from "./SwiperCard";
import { Box } from "@mui/material";
import { swiperCard } from "@/data/SwiperCardData";

const SwiperCardList = () => {
  return (
    <Box mt={"-100px"}>
      <SwiperCard swiperCard={swiperCard} />
    </Box>
  );
};

export default SwiperCardList;
