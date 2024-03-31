import { Box, Typography } from "@mui/material";
import React from "react";
import Title from "../title/Title";
import { UserData } from "@/data/SwiperCardData";
import UserReview from "./UserReview";

const UserReviewList = () => {
  return (
    <Box width={"100%"}>
      <Title content="Customer Review" />
      <UserReview userInfo={UserData} />
    </Box>
  );
};

export default UserReviewList;
