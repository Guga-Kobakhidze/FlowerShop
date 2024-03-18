"use client";

import React from "react";
import SwiperCard from "../components/swiper/SwiperCard";
import { swiperCard } from "@/data/SwiperCardData";
import HeroBox from "../components/herobox/HeroBox";
import TrandyCard from "../components/trandycard/TrandyCard";
import { trandingCard } from "@/data/FlowerCardData";
import { BoxContent, GridBox, GridBoxTrand } from "./MainPageStyle";

const MainPage = () => {
  return (
    <BoxContent>
      <GridBox container>
        <HeroBox />
        <SwiperCard swiperCard={swiperCard} />
      </GridBox>
      <GridBoxTrand container>
        <TrandyCard trandyCard={trandingCard} />
      </GridBoxTrand>
    </BoxContent>
  );
};

export default MainPage;
