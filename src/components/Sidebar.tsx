import React from "react";
import { Box, Typography, useMediaQuery, Theme } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import ExportButton from "./ExportButton";
import { eSideBar } from "dto/enum/Sidebar.enum";
import { SidebarProps } from "dto/interfaces/ISidebar.interface";
import MenuList from "./MenuList";

const Sidebar: React.FC<SidebarProps> = ({ routes }) => {
  const isEditing = useSelector(
    (state: RootState) => state.pagesSlice.isEditing
  );
  const pages = useSelector((state: RootState) => state.pagesSlice.pages);
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const exportJSON = () => {
    const jsonContent = JSON.stringify(pages, null, 2);
    const blob = new Blob([jsonContent], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "documentation.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Box
      width={isSmallScreen ? "100%" : "20%"}
      bgcolor="linear-gradient(to bottom, #e3f2fd, #f5f5f5)"
      p={2}
      borderRight={isSmallScreen ? "none" : "1px solid #e0e0e0"}
      boxShadow={isSmallScreen ? "none" : "2px 0 5px rgba(0, 0, 0, 0.1)"}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height={isSmallScreen ? "auto" : "100vh"}
      borderRadius="8px"
      sx={{
        position: isSmallScreen ? "relative" : "fixed",
        marginTop: isSmallScreen ? 3 : 0,
        top: 0,
        zIndex: 1200,
      }}
    >
      <Box>
        <Typography
          variant="h6"
          fontWeight="bold"
          mb={3}
          textAlign="center"
          color="#333"
          sx={{
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          {eSideBar.menuTitle}
        </Typography>
        <MenuList routes={routes} isEditing={isEditing} />
      </Box>

      <Box mt={2}>
        <ExportButton onClick={exportJSON} disabled={isEditing} />
      </Box>
    </Box>
  );
};

export default Sidebar;
