import { Box, styled } from "@mui/material";
import { transform } from "next/dist/build/swc";
import { Swiper } from "swiper/react";

export const MySwiper = styled(Swiper)({
  width: "100%",
  height: 700,

  ".swiper-slide": {
    fontSize: 18,
    background: "#fff",
    backgroundColor: "transparent",

    "& img": {
      width: 660,
      height: 600,
    },
  },

  ".swiper-button-prev, .swiper-button-next": {
    color: "hsla(0, 0%, 100%, 0.633)",
    position: "absolute",
    bottom: 0,

    "&::after": {
      fontSize: 20,
      width: 20,
      height: 20,
    },
  },

  ".swiper-button-next": {
    right: 80,
    top: "64%",
  },

  ".swiper-button-prev": {
    left: 80,
    top: "64%",
  },

  ".swiper-pagination-bullet": {
    width: 6,
    height: 6,
    backgroundColor: "white",
  },

  ".swiper-pagination-bullet-active": {
    width: 21,
    height: 6,
    backgroundColor: "white",
  },
});

export const BestSwiperBox = styled(Box)({
  backgroundImage: `url("/assets/bestFlowBg.svg")`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  padding: "0 100px",

  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});
