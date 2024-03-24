import { Box } from "@mui/material";
import React from "react";
import Title from "../title/Title";
import { trandingCard } from "@/data/FlowerCardData";
import TrandyCard from "./TrandyCard";

const TrandyCardList = () => {
  return (
    <Box width={"100%"} textAlign={"center"} mb={5}>
      <Title content="Our Trendy plants" />
      <TrandyCard trandyCard={trandingCard} />
    </Box>
  );
};

export default TrandyCardList;
