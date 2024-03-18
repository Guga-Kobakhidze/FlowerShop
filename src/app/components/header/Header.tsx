"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavBar from "./NavBar";
import Icons from "./Icons";
import { HeaderBox } from "./HeaderStyle";

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
    <HeaderBox bgcolor={bgColor ? "rgba(255, 255, 255, 0.1)" : "transparent"}>
      <Link href="/">
        <img src="/assets/Logo.svg" alt="Logo" />
      </Link>
      {!showBurger && <NavBar />}
      <Icons isVisible={showBurger} />
    </HeaderBox>
  );
};

export default Header;
