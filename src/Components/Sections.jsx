import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Sections = () => {
  return (
    <Stack gap={5}>
      <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{ justifyContent: "center", flexWrap: "wrap", gap: "20px", padding: "20px 0", backgroundColor: "transparent", border: "none", boxShadow: "none" }}>
        <Link to={"/"}><Button>INICIO</Button></Link>
        <Link to={"/archivos"}><Button>ARCHIVOS</Button></Link>
        <Link to={"/edificios"}><Button>EDIFICIOS</Button></Link>
        <Link to={"/usuarios"}><Button>USUARIOS</Button></Link>
        <Link to={"/subirArchivo"}><Button>SUBIR ARCHIVO</Button></Link>
      </ButtonGroup>
    </Stack>
  )
}

export default Sections