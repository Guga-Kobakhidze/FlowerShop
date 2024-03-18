import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ClickButton from "../buttons/Button";
import UserCard from "./UserCard";
import { UserData } from "../../../data/SwiperCardData";
import { ButtonStyle, HeroCard } from "./HeroBoxStyle";

const HeroBox = () => {
  return (
    <Box maxWidth={650} color={"white"}>
      <Typography variant="h1" mb={1}>
        Breath Natureal
      </Typography>
      <Typography variant="subtitle1" mb={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <HeroCard mb={28}>
        <ClickButton content="Explore" />
        <ButtonStyle>
          <img src="/assets/livedemo.svg" alt="liveDemo" />
          <Typography
            variant="subtitle1"
            textTransform={"capitalize"}
            color={"white"}
            width={120}
          >
            Live Demo...
          </Typography>
        </ButtonStyle>
      </HeroCard>
      <UserCard userInfo={UserData} />
    </Box>
  );
};

export default HeroBox;
