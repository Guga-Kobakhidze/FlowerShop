import React from "react";
import SwiperCard from "../components/swiper/SwiperCard";
import { swiperCard } from "@/data/SwiperCardData";
import { Box } from "@mui/material";

const MainPage = () => {
  return (
    <Box>
      <SwiperCard swiperCard={swiperCard} />
    </Box>
  );
};

export default MainPage;
