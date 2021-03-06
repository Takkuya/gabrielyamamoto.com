import { Projects } from "./components/MyProjects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { DefaultTheme, ThemeProvider } from "styled-components";

import usePersistedState from "./hooks/usePersistedState";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import GlobalStyle from "./styles/global";
import { LandingPage } from "./components/LandingPage";
import { Footer } from "./components/Footer";

export const MainRoutes = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header toggleTheme={toggleTheme} />
        <Routes>
          <Route path="" element={<LandingPage />} />
          <Route path="projetos" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};
