import { usePerfil } from "../../contexts";

export const Profile = () => {
  const { perfis, handlePerfis } = usePerfil();
  return (
    <>
      {perfis.map((p) => (
        <div key={p.id}>
          <p>{p.nome}</p>
          <button onClick={() => handlePerfis(p.id)}>
            {p.seguindo ? "Seguindo" : "Seguir"}
          </button>
        </div>
      ))}
    </>
  );
};
