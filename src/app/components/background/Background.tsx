import { Box } from "@mui/material";
import Image from "next/image";

const Background = () => {
  return (
    <Box
      height={{ md: "275vh", xs: "100vh" }}
      sx={{
        position: "relative",
        width: "100%",
      }}
    >
      <Image
        src={"/assets/background.svg"}
        alt="Vercel Logo"
        layout="fill"
        objectFit="cover"
      />
    </Box>
  );
};

export default Background;
