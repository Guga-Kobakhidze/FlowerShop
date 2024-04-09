import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ClickButton from "../buttons/Button";
import { SwiperSlide } from "swiper/react";
import { Box, Typography } from "@mui/material";
import { SwiperBestProps } from "@/app/interfaces/interfaces";
import { BestSwiperBox, MySwiper } from "./BestSwiperStyle";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";

const BestSwiper: React.FC<SwiperBestProps> = ({ swiperCard }) => {
  return (
    <Box>
      <MySwiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {swiperCard.map((card) => (
          <SwiperSlide key={card.id}>
            <BestSwiperBox>
              <img src={card.image} alt="flower" />
              <Box color={"white"}>
                <Typography variant="h4" mb={4}>
                  {card.title}
                </Typography>
                <Typography variant="body1" mb={4} maxWidth={550}>
                  {card.text}
                </Typography>
                <Typography variant="body1" mb={4} maxWidth={550}>
                  {card.text2}
                </Typography>
                <ClickButton content="EXPLORE" />
              </Box>
            </BestSwiperBox>
          </SwiperSlide>
        ))}
      </MySwiper>
    </Box>
  );
};

export default BestSwiper;
