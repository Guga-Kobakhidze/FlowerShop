"use client";

import { Box, Grid, styled } from "@mui/material";

export const TitleStyle = styled(Box)({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
});

export const GridCardStyle = styled(Grid)({
  position: "relative",
  height: 600,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  ".CardBg": {
    position: "absolute",
    width: 440,
  },
});

export const GridCardImage = styled(Box)({
  position: "absolute",
  top: -50,
  left: 0,
  width: 460,
  img: { width: "100%" },
});

export const GridCardContent = styled(Box)({
  paddingTop: 200,
  marginLeft: 60,
  width: 320,
  color: "white",
  opacity: 0.75,

  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
