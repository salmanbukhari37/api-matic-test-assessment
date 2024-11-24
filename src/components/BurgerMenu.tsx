import React from "react";
import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface BurgerMenuProps {
  toggleDrawer: (open: boolean) => void;
  isSmallScreen: boolean;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({
  toggleDrawer,
  isSmallScreen,
}) => {
  return (
    <Box
      position="fixed"
      top={16}
      left={16}
      zIndex={isSmallScreen ? 0 : 1301}
      sx={{
        backgroundColor: "#fff",
        borderRadius: "50%",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      <IconButton onClick={() => toggleDrawer(true)} size="large">
        <MenuIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default BurgerMenu;
