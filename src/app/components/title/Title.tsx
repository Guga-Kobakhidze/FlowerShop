import { Typography } from "@mui/material";
import { TitleStyle } from "../topselling/TopSellingStyle";
import React from "react";

const Title: React.FC<{ content: string }> = ({ content }) => {
  return (
    <TitleStyle mb={15}>
      <Typography variant="h4" color={"white"}>
        <img src="./assets/conture.svg" alt="conture" />
        {content}
      </Typography>
    </TitleStyle>
  );
};

export default Title;
