import React from "react";
import SwiperCard from "../components/swiper/SwiperCard";
import { swiperCard } from "@/data/SwiperCardData";
import { Box, Grid } from "@mui/material";
import HeroBox from "../components/herobox/HeroBox";
import TrandyCard from "../components/trandycard/TrandyCard";
import { trandingCard } from "@/data/FlowerCardData";

const MainPage = () => {
  return (
    <Box position={"relative"} p={"0 45px"} mt={"220px"}>
      <Grid
        container
        justifyContent={"space-between"}
        alignItems={"start"}
        mb={6}
      >
        <HeroBox />
        <SwiperCard swiperCard={swiperCard} />
      </Grid>
      <Grid container flexDirection={"column"} alignItems={"center"}>
        <TrandyCard trandyCard={trandingCard} />
      </Grid>
    </Box>
  );
};

export default MainPage;
