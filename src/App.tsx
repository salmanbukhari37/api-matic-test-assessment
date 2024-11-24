import React, { useState } from "react";
import {
  ThemeProvider,
  CssBaseline,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Helmet } from "react-helmet";
import AppRoutes from "./routes/AppRoutes";
import ErrorBoundary from "./components/ErrorBoundary";
import SidebarDrawer from "./components/SidebarDrawer";
import BurgerMenu from "components/BurgerMenu";
import StaticSidebar from "components/StaticSidebar";
import { routes } from "./routes/Routes";
import { eRoutes } from "dto/enum/Routes.enum";

const App: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <Provider store={store}>
      <Router>
        <Helmet>
          <title>{eRoutes.AppTitle}</title>
        </Helmet>
        <ThemeProvider theme={theme}>
          <ErrorBoundary>
            <CssBaseline />
            <Box display="flex" height="100vh">
              {isSmallScreen ? (
                <>
                  {/* Burger Menu */}
                  <BurgerMenu
                    toggleDrawer={toggleDrawer}
                    isSmallScreen={isSmallScreen}
                  />

                  {/* Drawer Sidebar */}
                  <SidebarDrawer
                    isOpen={isDrawerOpen}
                    toggleDrawer={toggleDrawer}
                    routes={routes}
                  />
                </>
              ) : (
                <StaticSidebar routes={routes} />
              )}

              {/* Main Content */}
              <Box flex="1" overflow="auto" p={isSmallScreen ? 2 : 5}>
                <AppRoutes />
              </Box>
            </Box>
          </ErrorBoundary>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default App;
