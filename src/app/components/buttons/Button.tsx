import { ClickBtnProps } from "@/app/interfaces/interfaces";
import { Typography } from "@mui/material";
import React from "react";
import { ClickButtonStyle } from "./ButtonsStyle";

const ClickButton: React.FC<ClickBtnProps> = ({ content, image }) => {
  return (
    <ClickButtonStyle variant="outlined">
      <Typography variant="h6" display={"flex"} alignItems={"center"}>
        {content} {image && <img src={image} alt="buttonIcon" />}
      </Typography>
    </ClickButtonStyle>
  );
};

export default ClickButton;
