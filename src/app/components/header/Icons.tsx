import { Button, ButtonGroup } from "@mui/material";
import React from "react";

const Icons: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    <ButtonGroup
      sx={{
        button: {
          border: "none",
          "&:hover": {
            border: "none",
            bgcolor: "transparent",
          },
        },
      }}
    >
      <Button>
        <img src="/assets/searchicon.svg" alt="search" />
      </Button>
      <Button>
        <img src="/assets/bagicon.svg" alt="bagicon" />
      </Button>
      {isVisible && (
        <Button>
          <img src="/assets/burgermenu.svg" alt="burgermenu" />
        </Button>
      )}
    </ButtonGroup>
  );
};

export default Icons;
