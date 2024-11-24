import React, { useState } from "react";
import { Box, useMediaQuery, Theme } from "@mui/material";
import PageRenderer from "./PageRenderer";

const Documentation: React.FC = () => {
  const selectedIndex = 0;

  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <Box
      display="flex"
      flexDirection={isSmallScreen ? "column" : "row"}
      height="100vh"
    >
      <PageRenderer pageIndex={selectedIndex} />
    </Box>
  );
};

export default Documentation;
