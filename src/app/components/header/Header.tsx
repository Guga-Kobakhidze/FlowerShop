"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Grid } from "@mui/material";
import NavBar from "./NavBar";
import Icons from "./Icons";

const Header = () => {
  const [showBurger, setShowBurger] = useState<boolean>(false);
  const [bgColor, setBgColor] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 1200 ? setShowBurger(true) : setShowBurger(false);
    };

    const handleScroll = () => {
      window.scrollY > 0 ? setBgColor(true) : setBgColor(false);
    };

    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Grid
      bgcolor={bgColor ? "rgba(255, 255, 255, 0.1)" : "transparent"}
      p={"30px 40px"}
      width={"100%"}
      position={"fixed"}
      top={0}
      zIndex={999}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{ transition: "0.5s" }}
    >
      <Link href="/">
        <img src="/assets/Logo.svg" alt="Logo" />
      </Link>
      {!showBurger && <NavBar />}
      <Icons isVisible={showBurger} />
    </Grid>
  );
};

export default Header;
