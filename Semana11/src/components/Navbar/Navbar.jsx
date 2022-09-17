import { useCustomTheme } from "../../contexts";
import { Button, Container, Title, Wrapper } from "./Navbar.styled";
import logo from "../../assets/react.svg";

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
