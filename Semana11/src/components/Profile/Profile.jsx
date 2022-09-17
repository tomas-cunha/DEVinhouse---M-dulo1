import { usePerfil } from "../../contexts";
import PropTypes from "prop-types";
import { Container } from "./Profile.styled";
import { Button } from "../Button";

export const Profile = ({ profile }) => {
  const { handlePerfis } = usePerfil();
  return (
    <Container>
      <p>{profile.nome}</p>
      <Button onClick={() => handlePerfis(profile.id)}>
        {profile.seguindo ? "Seguindo" : "Seguir"}
      </Button>
    </Container>
  );
};

Profile.propTypes = {
  profile: PropTypes.object,
};
