import { useCustomTheme } from "../../contexts";
import { Container, Title, Wrapper } from "./Navbar.styled";
import logo from "../../assets/react.svg";
import { Button } from "../Button";

export const Navbar = () => {
  const { handleTheme } = useCustomTheme();
  return (
    <Container>
      <Wrapper>
        <img src={logo} alt="" />
        <Title>Perfis</Title>
      </Wrapper>
      <Button onClick={handleTheme}>Alterar tema</Button>
    </Container>
  );
};
