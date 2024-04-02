import UserRate from "../rateuser/UserRate";
import React from "react";
import { HeroBox, HeroCard } from "./HeroBoxStyle";
import { UserinfoProps } from "@/app/interfaces/interfaces";
import { Typography } from "@mui/material";

const UserCard: React.FC<UserinfoProps> = ({ userInfo }) => {
  const user = userInfo[0];

  return (
    <HeroBox key={user.id}>
      <HeroCard height={64} mb={2}>
        <img src={user.icon} alt="user" />
        <UserRate name={user.name} stars={user.stars} />
      </HeroCard>
      <Typography variant="subtitle1">{user.desc}</Typography>
    </HeroBox>
  );
};

export default UserCard;
