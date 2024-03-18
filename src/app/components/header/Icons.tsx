import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import { HeaderIcons } from "./HeaderStyle";
import ClickButton from "../buttons/Button";

const Icons: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    <HeaderIcons>
      <ClickButton image="/assets/searchicon.svg" />
      <ClickButton image="/assets/bagicon.svg" />
      {isVisible && <ClickButton image="/assets/burgermenu.svg" />}
    </HeaderIcons>
  );
};

export default Icons;
