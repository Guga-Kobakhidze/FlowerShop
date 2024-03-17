import { Button, Typography } from "@mui/material";
import React from "react";

const ClickButton: React.FC<{ content: string }> = ({ content }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        borderColor: "white",
        color: "white",
        "&:hover": { borderColor: "gray", color: "gray" },
      }}
    >
      <Typography variant="h6">{content}</Typography>
    </Button>
  );
};

export default ClickButton;
