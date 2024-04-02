import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { Box, Rating, Typography } from "@mui/material";

const UserRate: React.FC<{ name: string; stars: number }> = ({
  name,
  stars,
}) => {
  return (
    <Box>
      <Typography variant="subtitle1">{name}</Typography>
      <Rating
        sx={{
          fontSize: "1rem",
          color: "#FFF84E",
          gap: "0.5rem",
          ml: "-2px",
        }}
        name="text-feedback"
        value={stars}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0 }} fontSize="inherit" />}
      />
    </Box>
  );
};

export default UserRate;
