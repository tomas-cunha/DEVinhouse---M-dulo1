import { ThemeProvider } from "styled-components";

import { PerfilProvider, useCustomTheme } from "../../contexts";
import { GlobalStyle } from "../../themes";
import { Navbar, Profile } from "../../components";

export const AppLayout = () => {
  const { theme } = useCustomTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <PerfilProvider>
        <Profile />
      </PerfilProvider>
    </ThemeProvider>
  );
};
