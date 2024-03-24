import React from "react";
import HeroBox from "../components/herobox/HeroBox";
import TrandyCardList from "../components/trandycard/TrandyCardList";
import GridCardsList from "../components/topselling/TopSellingList";
import SwiperCardList from "../components/swiper/SwiperCardList";
import UserReviewList from "../components/userreview/UserReviewList";
import { BoxContent, GridBox, GridTop, GridTrand } from "./MainPageStyle";
import { Grid } from "@mui/material";

const MainPage = () => {
  return (
    <BoxContent>
      <GridBox container>
        <HeroBox />
        <SwiperCardList />
      </GridBox>
      <GridTrand container>
        <TrandyCardList />
      </GridTrand>
      <GridTop container>
        <GridCardsList />
      </GridTop>
      <Grid container>
        <UserReviewList />
      </Grid>
    </BoxContent>
  );
};

export default MainPage;
