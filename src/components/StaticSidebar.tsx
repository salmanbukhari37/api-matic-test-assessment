import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";

interface StaticSidebarProps {
  routes: any[];
}

const StaticSidebar: React.FC<StaticSidebarProps> = ({ routes }) => {
  return (
    <Box
      width="20%"
      display="block"
      overflow="auto"
      sx={{
        background: "linear-gradient(to bottom, #e3f2fd, #f5f5f5)",
        borderRight: "1px solid #e0e0e0",
      }}
    >
      <Sidebar routes={routes} />
    </Box>
  );
};

export default StaticSidebar;
