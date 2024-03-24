import { TrandyCardProps } from "@/app/interfaces/interfaces";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ClickButton from "../buttons/Button";
import { BoxCard, BoxStyle, BoxedCard } from "./TrandyCardStyle";

const TrandyCard: React.FC<TrandyCardProps> = ({ trandyCard }) => {
  return (
    <BoxStyle>
      {trandyCard.map((card) => (
        <BoxCard key={card.id}>
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
          <BoxedCard className="myBox">
            <Typography variant="h4" mb={1.5}>
              {card.title}
            </Typography>
            <Typography variant="subtitle1" lineHeight={"normal"} mb={1.5}>
              {card.desc}
            </Typography>
            <Typography variant="h4" mb={2}>
              {card.rs}
            </Typography>
            <Box>
              <ClickButton content="Expore" />
              <ClickButton image="/assets/bagicon.svg" />
            </Box>
          </BoxedCard>
        </BoxCard>
      ))}
    </BoxStyle>
  );
};

export default TrandyCard;
