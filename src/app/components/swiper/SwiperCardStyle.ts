import { Box, styled } from "@mui/material";
import { Swiper } from "swiper/react";

export const MySwiper = styled(Swiper)({
  width: 512,
  height: 800,
  borderRadius: 77,

  ".swiper-slide": {
    textAlign: "center",
    fontSize: 18,
    background: "#fff",
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",

    "& img": {
      width: "100%",
      height: "100%",
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
    right: 20,
    top: "68%",
  },

  ".swiper-button-prev": {
    left: 30,
    top: "68%",
  },

  ".swiper-pagination-bullet": {
    width: 6,
    height: 6,
    backgroundColor: "white",
    transform: "translateY(-120px)",
  },

  ".swiper-pagination-bullet-active": {
    width: 21,
    height: 6,
    backgroundColor: "white",
  },
});

export const SwiperCardBox = styled(Box)({
  backgroundImage: `url("/assets/CardBg.svg")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",

  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
  width: 512,
  height: 644,
});

export const SwiperCardContent = styled(Box)({
  position: "absolute",
  textAlign: "start",
  left: 72,
  bottom: 124,
  color: "white",
});
