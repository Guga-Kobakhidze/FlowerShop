import { UserinfoProps } from "@/app/interfaces/interfaces";
import { Box, Typography } from "@mui/material";
import { UserBG, UserCard } from "./UserReviewStyle";
import React from "react";

const UserReview: React.FC<UserinfoProps> = ({ userInfo }) => {
  return (
    <Box>
      {userInfo.map((user) => (
        <Box key={user.id} sx={{ ...UserBG }}>
          <img className="UserBg" src="/assets/UserBg2.svg" alt="userBg" />
          <Box sx={{ ...UserCard }}>
            <img src={user.icon} alt="user" />
            <Box>
              <Typography variant="subtitle1">{user.name}</Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default UserReview;
