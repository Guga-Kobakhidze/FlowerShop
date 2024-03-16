"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Grid } from "@mui/material";
import NavBar from "./NavBar";
import Icons from "./Icons";

const Header = () => {
  const [showBurger, setShowBurger] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setShowBurger(true);
      } else {
        setShowBurger(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Grid
      p={"30px 40px"}
      width={"100%"}
      position={"fixed"}
      top={0}
      zIndex={999}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
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
