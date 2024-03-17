import { ClickBtnProps } from "@/app/interfaces/interfaces";
import { Button, Typography } from "@mui/material";
import React from "react";

const ClickButton: React.FC<ClickBtnProps> = ({ content, image }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        borderWidth: "2px",
        height: 60,
        borderColor: "white",
        color: "white",
        "&:hover": { borderColor: "gray", color: "gray", borderWidth: "2px" },
      }}
    >
      <Typography variant="h6" display={"flex"} alignItems={"center"}>
        {content} {image && <img src={image} alt="buttonIcon" />}
      </Typography>
    </Button>
  );
};

export default ClickButton;
