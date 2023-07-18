import { Box } from "@chakra-ui/react";
import React from "react";

const BannerPage = () => {
  return (
    <Box
      bg="blue.500"
      color="white"
      py={4}
      px={8}
      textAlign="center"
      fontWeight="bold"
    >
      Welcome to SpaceX Data Portal
    </Box>
  );
};

export default BannerPage;
