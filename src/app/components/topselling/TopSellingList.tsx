import React from "react";
import Title from "../title/Title";
import { Box } from "@mui/material";
import { gridCardData } from "@/data/GridCardData";
import GridCard from "./TopSellingCard";

const GridCardsList = () => {
  return (
    <Box>
      <Title content={"Our Top Selling"} />
      <GridCard cardData={gridCardData} />
    </Box>
  );
};

export default GridCardsList;
