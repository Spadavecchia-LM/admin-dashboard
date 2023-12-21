import React, { useContext } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, ButtonGroup, Typography } from '@mui/material';
import TableFilter from '../TableFilter';
import Stack from "@mui/material/Stack"
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { GlobalContext } from '../../Context';




  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

const Archivos = () => {

  const {state} = useContext(GlobalContext)

  return (
    <Stack alignItems="center">
        <TableFilter/>
        <Typography variant='h3'>Lista de archivos</Typography>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Nombre</TableCell>
          <TableCell align="left">Categoria</TableCell>
          <TableCell align="left">Fecha</TableCell>
          <TableCell align="left">Destinatario</TableCell>
          <TableCell align="left">Edficio</TableCell>
          <TableCell align="left">Acciones</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {state.archivos.map((row) => (
          <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            
            <TableCell component="th" scope="row">
              {row.nombre}
            </TableCell>
            <TableCell align="left">{row.categoria}</TableCell>
            <TableCell align="left">{row.fecha}</TableCell>
            <TableCell align="left">{row.destinatario}</TableCell>
            <TableCell align="left">{row.edificio}</TableCell>
            <TableCell align="left"><ButtonGroup><Button>🔎</Button><Button>⬇️</Button></ButtonGroup></TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>

  <Button sx={{margin:"50px auto"}} component="label" variant="contained" startIcon={<CloudUploadIcon />}>
      Subir nuevo archivo
      <VisuallyHiddenInput type="file" accept='*' multiple />
    </Button>
    </Stack>

  )
}

export default Archivos