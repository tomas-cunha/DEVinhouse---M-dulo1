import PropTypes from "prop-types";
import { useState } from "react";
import { PerfilContext } from "./PerfilContext";
import { perfis as service } from "../../services";

export const PerfilProvider = ({ children }) => {
  const [perfis, setPerfis] = useState(service);

  const handlePerfis = (id) => {
    const perfisUpdated = perfis.map((p) =>
      p.id === id ? { ...p, seguindo: !p.seguindo } : p,
    );

    setPerfis(perfisUpdated);
  };

  return (
    <PerfilContext.Provider value={{ perfis, handlePerfis }}>
      {children}
    </PerfilContext.Provider>
  );
};

PerfilProvider.propTypes = {
  children: PropTypes.node,
};
