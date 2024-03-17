import { TrandyCardProps } from "@/app/interfaces/interfaces";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ClickButton from "../buttons/Button";

const TrandyCard: React.FC<TrandyCardProps> = ({ trandyCard }) => {
  return (
    <Box width={"100%"} textAlign={"center"}>
      <Typography variant="h3" color={"white"} mb={15}>
        Our Trendy plants
      </Typography>
      <Box display={"flex"} flexDirection={"column"} gap={15}>
        {trandyCard.map((card, index) => (
          <Box
            key={index}
            height={400}
            position={"relative"}
            display={"flex"}
            alignItems={"center"}
            gap={10}
            color={"white"}
            sx={{
              "&:nth-child(2n) img": { order: 1 },
              "&:nth-child(2n) .myBox": { ml: "122px" },
            }}
          >
            <img
              width={"100%"}
              src="/assets/TrandyBg.svg"
              alt="trandyBg"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />
            <Image
              width={600}
              height={570}
              src={card.image}
              alt={card.title}
              style={{ transform: "translateY(-30px)" }}
            />
            <Box className="myBox" textAlign={"start"} width={600} zIndex={2}>
              <Typography variant="h4" mb={1.5}>
                {card.title}
              </Typography>
              <Typography variant="subtitle1" lineHeight={"normal"} mb={1.5}>
                {card.desc}
              </Typography>
              <Typography variant="h4" mb={2}>
                {card.rs}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "start", gap: 3 }}>
                <ClickButton content="Expore" />
                <ClickButton image="/assets/bagicon.svg" />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TrandyCard;
