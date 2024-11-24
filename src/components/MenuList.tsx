import React from "react";
import { Box, List } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { AppRoute } from "../dto/types";

interface MenuListProps {
  routes: AppRoute[];
  isEditing: boolean;
}

const MenuList: React.FC<MenuListProps> = ({ routes, isEditing }) => {
  const location = useLocation();

  return (
    <List>
      {routes.map((route, index) => (
        <Box
          key={index}
          sx={{
            pointerEvents: isEditing ? "none" : "auto",
            opacity: isEditing ? 0.5 : 1,
          }}
        >
          <Link
            to={route.path || "/"}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Box
              sx={{
                padding: "10px 15px",
                borderRadius: "5px",
                backgroundColor:
                  location.pathname === route.path ? "#e3f2fd" : "inherit",
                "&:hover": {
                  backgroundColor: isEditing ? "inherit" : "#f0f0f0",
                },
                fontWeight:
                  location.pathname === route.path ? "bold" : "normal",
              }}
            >
              {route.label}
            </Box>
          </Link>
        </Box>
      ))}
    </List>
  );
};

export default MenuList;
