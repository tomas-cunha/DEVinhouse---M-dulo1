import { ThemeProvider } from "styled-components";
import Proptypes from "prop-types";
import { useCustomTheme } from "../../contexts";
import { GlobalStyle } from "../../themes";
import { Navbar } from "../../components";

export const AppLayout = ({ children }) => {
  const { theme } = useCustomTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      {children}
    </ThemeProvider>
  );
};

AppLayout.propTypes = {
  children: Proptypes.node,
};
