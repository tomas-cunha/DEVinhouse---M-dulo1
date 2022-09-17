import { ThemeProvider } from "styled-components";

import { PerfilProvider, useCustomTheme } from "../../contexts";
import { GlobalStyle } from "../../themes";
import { Navbar } from "../../components";
import { Profiles } from "../../pages";

export const AppLayout = () => {
  const { theme } = useCustomTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <PerfilProvider>
        <Profiles />
      </PerfilProvider>
    </ThemeProvider>
  );
};
