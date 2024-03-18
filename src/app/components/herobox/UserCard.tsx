"use client";

import { UserinfoProps } from "@/app/interfaces/interfaces";
import { Box, Rating, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import React from "react";
import { HeroBox, HeroCard } from "./HeroBoxStyle";

const UserCard: React.FC<UserinfoProps> = ({ userInfo }) => {
  const user = userInfo[0];

  return (
    <HeroBox key={user.id}>
      <HeroCard height={64} mb={2}>
        <img src={user.icon} alt="user" />
        <Box>
          <Typography variant="subtitle1">{user.name}</Typography>
          <Rating
            sx={{
              fontSize: "1rem",
              color: "#FFF84E",
              gap: "0.5rem",
              ml: "-2px",
            }}
            name="text-feedback"
            value={user.stars}
            readOnly
            precision={0.5}
            emptyIcon={<StarIcon style={{ opacity: 0 }} fontSize="inherit" />}
          />
        </Box>
      </HeroCard>
      <Typography variant="subtitle1">{user.desc}</Typography>
    </HeroBox>
  );
};

export default UserCard;
