import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ClickButton from "../buttons/Button";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Box, Typography } from "@mui/material";
import { SwiperProps } from "@/app/interfaces/interfaces";
import { MySwiper, SwiperCardBox, SwiperCardContent } from "./SwiperCardStyle";

const SwiperCard: React.FC<SwiperProps> = ({ swiperCard }) => {
  return (
    <Box mt={"-100px"}>
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
            <SwiperCardBox>
              <Box position={"absolute"} top={-95}>
                <img src={card.image} alt="flower" />
              </Box>
              <SwiperCardContent>
                <Typography variant="h6" mb={"20px"}>
                  {card.title}
                </Typography>
                <Typography variant="h4" mb={"20px"}>
                  {card.subtitle}
                </Typography>
                <ClickButton content="buy now" />
              </SwiperCardContent>
            </SwiperCardBox>
          </SwiperSlide>
        ))}
      </MySwiper>
    </Box>
  );
};

export default SwiperCard;
