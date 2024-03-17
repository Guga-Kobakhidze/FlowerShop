"use client";

import { UserinfoProps } from "@/app/interfaces/interfaces";
import { Box, Rating, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import React from "react";

const UserCard: React.FC<UserinfoProps> = ({ userInfo }) => {
  const user = userInfo[0];

  return (
    <Box
      key={user.id}
      width={410}
      height={237}
      p={"43px 46px"}
      color={"white"}
      sx={{
        backgroundImage: `url("/assets/UserBg.svg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box height={64} display={"flex"} alignItems={"center"} gap={3} mb={2}>
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
      </Box>
      <Typography variant="subtitle1">{user.desc}</Typography>
    </Box>
  );
};

export default UserCard;
