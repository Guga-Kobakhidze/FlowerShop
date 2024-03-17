import { Box } from "@mui/material";
import Image from "next/image";

const Background = () => {
  return (
    <Box
      height={{ md: "275vh", xs: "100vh" }}
      width={"100%"}
      position={"absolute"}
      top={0}
      left={0}
      right={0}
      bottom={0}
      sx={{
        backgroundImage: `url(/assets/background.svg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></Box>
  );
};

export default Background;
