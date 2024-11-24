import React from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Helmet } from "react-helmet";
import AppRoutes from "./routes/AppRoutes";
import ErrorBoundary from "components/ErrorBoundary";
import theme from "./theme";
import Sidebar from "components/Sidebar";
import { routes } from "./routes/Routes";
import { eRoutes } from "dto/enum/Routes.enum";

const App: React.FC = () => {
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
              <Sidebar routes={routes} />
              <Box flex="1" overflow="auto">
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
