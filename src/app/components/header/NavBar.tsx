import React from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { NavBarStyle } from "./HeaderStyle";

const NavBar = () => {
  return (
    <NavBarStyle>
      <Link href="/">Home</Link>
      <Link href="#">
        Plants Type <ArrowDropDownIcon />
      </Link>
      <Link href="#">More</Link>
      <Link href="#">Contact</Link>
    </NavBarStyle>
  );
};

export default NavBar;
