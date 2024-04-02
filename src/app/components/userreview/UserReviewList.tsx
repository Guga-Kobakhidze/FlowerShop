import { Box } from "@mui/material";
import React from "react";
import Title from "../title/Title";
import UserReview from "./UserReview";
import { UserData } from "@/data/SwiperCardData";

const UserReviewList = () => {
  return (
    <Box width={"100%"} mb={14}>
      <Title content="Customer Review" />
      <UserReview userInfo={UserData} />
    </Box>
  );
};

export default UserReviewList;
