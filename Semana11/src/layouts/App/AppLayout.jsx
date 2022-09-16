import { ThemeProvider } from "styled-components";
import Proptypes from "prop-types";
import { useCustomTheme } from "../../contexts";

export const AppLayout = ({ children }) => {
  const { theme } = useCustomTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

AppLayout.propTypes = {
  children: Proptypes.node,
};
