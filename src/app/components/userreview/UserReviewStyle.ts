import { Box, SxProps, styled } from "@mui/material";

export const UserBG: SxProps = {
  position: "relative",
  display: "flex",
  justifyContent: "center",

  ".UserBg": {
    width: 460,
    height: 480,
  },
};

export const UserCard: SxProps = {
  position: "absolute",
  top: 91,
  left: 50,
  width: "100%",

  img: {
    width: 88,
    height: 88,
  },

  ".userInbox": {
    display: "flex",
    alignItems: "center",
    gap: 2,
    color: "white",

    h6: {
      fontSize: 34,
      lineHeight: 1.2,
    },
  },
};

export const SwiperContent = styled(Box)({
  ".myOwnSwiper": {
    ".swiper-button-prev, .swiper-button-next": {
      color: "#1B2316",
      zIndex: 999,
      transition: "0.3s",

      "&:hover": {
        color: "white",
      },
    },
  },
});
