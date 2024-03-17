"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Box, Button, Typography } from "@mui/material";
import { SwiperProps } from "@/app/interfaces/interfaces";

const SwiperCard: React.FC<SwiperProps> = ({ swiperCard }) => {
  return (
    <Box className="container" ml={115}>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {swiperCard.map((card) => (
          <SwiperSlide>
            <Box
              position={"relative"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"end"}
              width={512}
              height={644}
              sx={{
                backgroundImage: `url("/assets/CardBg.svg")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <Box position={"absolute"} top={-95}>
                <img src={card.image} alt="flower" />
              </Box>
              <Box
                position={"absolute"}
                textAlign={"start"}
                left={72}
                bottom={124}
                color={"white"}
              >
                <Typography variant="h6" mb={"20px"}>
                  {card.title}
                </Typography>
                <Typography variant="h4" mb={"20px"}>
                  {card.subtitle}
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "white",
                    color: "white",
                    "&:hover": { borderColor: "gray", color: "gray" },
                  }}
                >
                  <Typography variant="h6">Buy Now</Typography>
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default SwiperCard;
