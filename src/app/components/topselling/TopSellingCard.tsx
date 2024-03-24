import { GridCardProps } from "@/app/interfaces/interfaces";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ClickButton from "../buttons/Button";
import {
  GridCardContent,
  GridCardImage,
  GridCardStyle,
} from "./TopSellingStyle";

const GridCard: React.FC<GridCardProps> = ({ cardData }) => {
  return (
    <Grid container>
      {cardData.map((card) => (
        <GridCardStyle item xs={4} key={card.id}>
          <img className="CardBg" src="/assets/CardBg.svg" alt="CardBg" />
          <GridCardContent>
            <GridCardImage>
              <img src={card.image} alt={card.title} />
            </GridCardImage>
            <Typography variant="h4" mb={2}>
              {card.title}
            </Typography>
            <Typography width={250} mb={3} variant="subtitle1">
              {card.desc}
            </Typography>
            <Box>
              <Typography variant="h4">{card.rs}</Typography>
              <ClickButton image="/assets/bagicon.svg" />
            </Box>
          </GridCardContent>
        </GridCardStyle>
      ))}
    </Grid>
  );
};

export default GridCard;
