import React from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const NavBar = () => {
  return (
    <Box
      sx={{
        a: {
          color: "white",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "2px",
          "&:hover": {
            color: "gray",
          },
        },
      }}
      display={"flex"}
      gap={7}
    >
      <Link href="/">Home</Link>
      <Link href="#">
        Plants Type <ArrowDropDownIcon />
      </Link>
      <Link href="#">More</Link>
      <Link href="#">Contact</Link>
    </Box>
  );
};

export default NavBar;
