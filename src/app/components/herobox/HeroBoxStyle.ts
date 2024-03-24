"use client";

import { Box, Button, styled } from "@mui/material";

export const HeroBox = styled(Box)({
  width: 410,
  height: 237,
  padding: "43px 46px",
  color: "white",
  backgroundImage: `url("/assets/UserBg.svg")`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
});

export const HeroCard = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 20,
});

export const ButtonStyle = styled(Button)({
  border: "none",
  height: 64,
  img: {
    width: 40,
  },
});
