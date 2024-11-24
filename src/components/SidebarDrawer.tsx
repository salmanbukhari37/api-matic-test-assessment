import React from "react";
import { Drawer, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Sidebar from "./Sidebar";

interface SidebarDrawerProps {
  isOpen: boolean;
  toggleDrawer: (open: boolean) => void;
  routes: any[];
}

const SidebarDrawer: React.FC<SidebarDrawerProps> = ({
  isOpen,
  toggleDrawer,
  routes,
}) => {
  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={() => toggleDrawer(false)}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        "& .MuiDrawer-paper": {
          width: "80%",
          padding: 2,
          background: "linear-gradient(to bottom, #e3f2fd, #f5f5f5)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        },
      }}
    >
      <IconButton
        onClick={() => toggleDrawer(false)}
        size="large"
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
        }}
      >
        <CloseIcon />
      </IconButton>
      <Sidebar routes={routes} />
    </Drawer>
  );
};

export default SidebarDrawer;
