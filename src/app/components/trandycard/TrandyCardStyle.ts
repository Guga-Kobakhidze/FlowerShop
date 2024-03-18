import { styled } from "@mui/material";
import { Box } from "@mui/system";

export const BoxStyle = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 150,
});

export const BoxCard = styled(Box)({
  height: 400,
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: 60,
  color: "white",
  "&:nth-of-type(2n) img": { order: 1 },
  "&:nth-of-type(2n) .myBox": { marginLeft: "122px" },
});

export const BoxedCard = styled(Box)({
  textAlign: "start",
  width: 600,
  zIndex: 2,

  div: {
    display: "flex",
    gap: 20,
  },
});
