// EditarUsuarioForm.js
import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../Context";
import { Button, TextField } from "@mui/material";

const EditarUsuarioForm = ({ usuario, onSave, onCancel }) => {
  const { dispatch } = useContext(GlobalContext);

  const [nombre, setNombre] = useState(usuario.nombre);
  const [apellido, setApellido] = useState(usuario.apellido);

  const handleSave = () => {
    // Puedes realizar validaciones aquí antes de guardar
    onSave({ ...usuario, nombre, apellido });
    // Puedes enviar una acción al context para guardar el usuario editado
    // dispatch({ type: "GUARDAR_USUARIO_EDITADO", payload: { ...usuario, nombre, apellido } });
  };

  useEffect(() => {
    // Actualiza los campos del formulario cuando cambia el usuario seleccionado
    setNombre(usuario.nombre);
    setApellido(usuario.apellido);
  }, [usuario]);

  return (
    <div>
      <TextField
        label="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <TextField
        label="Apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
      />
      <Button onClick={handleSave}>Guardar</Button>
      <Button onClick={onCancel}>Cancelar</Button>
    </div>
  );
};

export default EditarUsuarioForm;
