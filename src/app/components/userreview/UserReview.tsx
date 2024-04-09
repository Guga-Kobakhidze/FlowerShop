"use client";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { UserinfoProps } from "@/app/interfaces/interfaces";
import { Box, Typography } from "@mui/material";
import { SwiperContent, UserBG, UserCard } from "./UserReviewStyle";
import React from "react";
import UserRate from "../rateuser/UserRate";

const UserReview: React.FC<UserinfoProps> = ({ userInfo }) => {
  return (
    <SwiperContent>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper myOwnSwiper"
      >
        {userInfo.map((user) => (
          <SwiperSlide key={user.id}>
            <Box sx={{ ...UserBG }}>
              <img className="UserBg" src="/assets/UserBg2.svg" alt="userBg" />
              <Box sx={{ ...UserCard }}>
                <Box className="userInbox" mb={8}>
                  <img src={user.icon} alt={user.name} />
                  <UserRate name={user.name} stars={user.stars} />
                </Box>
                <Typography
                  variant="body1"
                  color={"rgba(255, 255, 255, 0.85)"}
                  width={340}
                >
                  {user.desc}
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContent>
  );
};

export default UserReview;
