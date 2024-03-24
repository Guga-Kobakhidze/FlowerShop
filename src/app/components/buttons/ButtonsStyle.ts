"use client";

import { Button, styled } from "@mui/material";

export const ClickButtonStyle = styled(Button)({
  borderWidth: "2px",
  height: 60,
  borderColor: "white",
  color: "white",
  "&:hover": { borderColor: "gray", color: "gray", borderWidth: "2px" },
});
