// EditarEdificioForm.js
import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../Context";
import { Button, TextField } from "@mui/material";

const style = {
    margin: "20px auto"
}

const EditarEdificioForm = ({ edificio, onSave, onCancel }) => {
  const { dispatch } = useContext(GlobalContext);

  const [nombre, setNombre] = useState(edificio.nombre);
  const [direccion, setDireccion] = useState(edificio.direccion);
  const [razonSocial, setRazonSocial] = useState(edificio.razonSocial);
  const [cuit, setCuit] = useState(edificio.cuit);

  const handleSave = () => {
    onSave({ ...edificio, nombre, direccion, razonSocial, cuit });
    // dispatch({ type: "GUARDAR_EDIFICIO_EDITADO", payload: { ...edificio, nombre, direccion, razonSocial, cuit } });
  };

  useEffect(() => {
    setNombre(edificio.nombre);
    setDireccion(edificio.direccion);
    setRazonSocial(edificio.razonSocial);
    setCuit(edificio.cuit);
  }, [edificio]);

  return (
    <div>
      <TextField
        label="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        sx={style}
      />
      <TextField
        label="Dirección"
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
        sx={style}

      />
      <TextField
        label="Razón Social"
        value={razonSocial}
        onChange={(e) => setRazonSocial(e.target.value)}
        sx={style}

      />
      <TextField
        label="CUIT"
        value={cuit}
        onChange={(e) => setCuit(e.target.value)}
        sx={style}
      />
      <Button onClick={handleSave}>Guardar</Button>
      <Button onClick={onCancel}>Cancelar</Button>
    </div>
  );
};

export default EditarEdificioForm;
