// EdificioForm.js
import React, { useState, useEffect, useContext } from "react";
import { Button, ButtonGroup, Stack, TextField, Typography } from "@mui/material";
import { GlobalContext } from "../../Context";
import { useNavigate } from "react-router-dom";

const agregarEdificioForm = () => {

    const {state,dispatch} = useContext(GlobalContext)
    const navigate = useNavigate()

    const generateNumber = () => {
        return Math.floor(Math.random() * 100 + 1)
    }

    const [edificio, setEdificio] = useState({
        id: generateNumber(),
        nombre:"",
        direccion:"",
        razonSocial:"",
        cuit: null
    })

const handleChange = (e)  => {
    setEdificio({...edificio, [e.target.name] : e.target.value})
}  
    
const handleAdd = () => {

    const {nombre, direccion, razonSocial, cuit} = edificio

    if(nombre != "" && direccion != "" && razonSocial != "" && cuit != null){
        dispatch({type:"AGREGAR_EDIFICIO", payload: edificio })
        if(confirm("agregado con exito, desea volver a la lista de edificios?")){
            navigate("/edificios")
        }
        else{
            handleReset()
        }
    }else{
        alert("no puede haber campos vacios")
    }

  
}
const handleReset = () => {
    window.location.reload()
}




  return (
    <Stack width="50%" alignItems="center" justifyContent="center" margin="0 auto" gap={5}>
        <Typography variant="h3" component="h3"> AGREGAR EDIFICIO</Typography>

    
      <TextField
        label="Nombre"
        name="nombre"
        onChange={handleChange}
      />
      <TextField
        label="Dirección"
        name="direccion"
        onChange={handleChange}
      />
      <TextField
        label="Razón Social"
        name="razonSocial"
        onChange={handleChange}
      />
      <TextField
        label="CUIT"
        name="cuit"
        onChange={handleChange}
      />
      <ButtonGroup sx={{gap:"30px"}}>
      <Button variant="contained" onClick={() => handleAdd()}>Guardar</Button>
      <Button color="error" onClick={() => handleReset()}>Cancelar</Button>
      </ButtonGroup>
    </Stack>
  );
};

export default agregarEdificioForm;
