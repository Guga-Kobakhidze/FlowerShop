import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ClickButton from "../buttons/Button";
import UserCard from "./UserCard";
import { UserData } from "../../../data/SwiperCardData";

const HeroBox = () => {
  return (
    <Box maxWidth={650}>
      <Typography variant="h1" color={"white"} mb={1}>
        Breath Natureal
      </Typography>
      <Typography variant="subtitle1" color={"white"} mb={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Box mb={28} sx={{ display: "flex", alignItems: "center", gap: 3 }}>
        <ClickButton content="Explore" />
        <Button
          sx={{
            border: "none",
            height: 58,
            gap: 0,
            img: {
              width: 40,
            },
          }}
        >
          <img src="/assets/livedemo.svg" alt="liveDemo" />
          <Typography
            variant="subtitle1"
            textTransform={"capitalize"}
            color={"white"}
            width={120}
          >
            Live Demo...
          </Typography>
        </Button>
      </Box>
      <UserCard userInfo={UserData} />
    </Box>
  );
};

export default HeroBox;
