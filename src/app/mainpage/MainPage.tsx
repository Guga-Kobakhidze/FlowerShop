import React from "react";
import SwiperCard from "../components/swiper/SwiperCard";
import { swiperCard } from "@/data/SwiperCardData";
import { Box, Grid } from "@mui/material";
import HeroBox from "../components/herobox/HeroBox";

const MainPage = () => {
  return (
    <Box position={"relative"} p={"0 45px"} mt={"220px"}>
      <Grid container justifyContent={"space-between"} alignItems={"start"}>
        <HeroBox />
        <SwiperCard swiperCard={swiperCard} />
      </Grid>
    </Box>
  );
};

export default MainPage;
