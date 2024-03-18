import { Box, ButtonGroup, styled } from "@mui/material";

export const HeaderBox = styled(Box)({
  padding: "30px 40px",
  width: "100%",
  position: "fixed",
  top: 0,
  zIndex: 999,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  transition: "0.5s",
});

export const HeaderIcons = styled(ButtonGroup)({
  button: {
    border: "none",
    "&:hover": {
      border: "none",
      bgcolor: "transparent",
    },
  },
});

export const NavBarStyle = styled(Box)({
  display: "flex",
  gap: 50,

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
});
