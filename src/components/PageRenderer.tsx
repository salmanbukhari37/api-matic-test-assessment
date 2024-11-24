import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import PageContent from "./PageContent";

const PageRenderer: React.FC<{ pageIndex: number }> = ({ pageIndex }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return <PageContent isSmallScreen={isSmallScreen} pageIndex={pageIndex} />;
};

export default PageRenderer;
