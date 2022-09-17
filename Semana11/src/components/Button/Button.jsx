import { ButtonStyled } from "./Button.styles";

// eslint-disable-next-line react/prop-types
export const Button = ({ onClick, children }) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};
