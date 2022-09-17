import { Profile } from "../../components";
import { usePerfil } from "../../contexts";
import { Container } from "./Profiles.styled";

export const Profiles = () => {
  const { perfis } = usePerfil();
  return (
    <Container>
      {perfis.map((p) => (
        <Profile key={p.id} profile={p} />
      ))}
    </Container>
  );
};
