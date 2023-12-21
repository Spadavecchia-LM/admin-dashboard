import React, { useContext } from 'react'
import Stack from "@mui/material/Stack"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { GlobalContext } from '../../Context';
import { useNavigate } from 'react-router-dom';
import { Satellite } from '@mui/icons-material';

const Home = () => {
const {state} = useContext(GlobalContext)

const navigate = useNavigate()


  return (
    <Stack flexDirection="row" justifyContent="center" gap="20px" marginTop="50px" flexWrap="wrap">
<Card onClick={() => navigate("/archivos")} sx={{ minWidth:250, maxWidth: 345, cursor:"pointer",'&:hover':{backgroundColor:"#1565c0", color:"#fff", transition:"0.25s"}}} >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Archivos
        </Typography>
        <Typography variant="body2">
          Total de archivos: {state.archivos.length}
        </Typography>
      </CardContent>
    </Card>

    <Card  onClick={() => navigate("/usuarios")} sx={{minWidth:250,  maxWidth: 345, cursor:"pointer",'&:hover':{backgroundColor:"#1565c0", color:"#fff", transition:"0.25s"} }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Usuarios
        </Typography>
        <Typography variant="body2" >
          Total de usuarios: {state.usuarios.length}
          
        <Typography variant="body2" >
         Activados: 2
        </Typography>
        <Typography variant="body2">
        Pendientes de activacion: 1
        </Typography>
        </Typography>
      </CardContent>
    </Card>

    <Card  onClick={() => navigate("/edificios")} sx={{minWidth:250,  maxWidth: 345, cursor:"pointer",'&:hover':{backgroundColor:"#1565c0", color:"#fff", transition:"0.25s"}}} >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Edificios
        </Typography>
        <Typography variant="body2">
          Total de edificios: {state.edificios.length}
        </Typography>
      </CardContent>
    </Card>
    </Stack>
  )
}

export default Home