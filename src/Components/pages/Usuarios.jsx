// Usuarios.js
import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, ButtonGroup, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import EditarUsuarioForm from "../Utils/EditarUsuarioForm";
import { GlobalContext } from "../../Context";
import TableFilter from "../TableFilter";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Usuarios = () => {
  const [open, setOpen] = React.useState(false);

  const { state, dispatch } = useContext(GlobalContext);

  const handleOpen = (usuario) => {
    dispatch({ type: "EDITAR_USUARIO", payload: usuario });
    setOpen(true);
  };

  const handleClose = () => {
    dispatch({ type: "EDITAR_USUARIO", payload: null });
    setOpen(false);
  };

  const handleSaveEdit = (editedUsuario) => {
    dispatch({ type: "GUARDAR_USUARIO_EDITADO", payload: editedUsuario });
    handleClose();
  };

  return (
    <Stack alignItems="center">
      <Typography variant="h3">Lista de Usuarios</Typography>
      <TableFilter/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell align="left">Apellido</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Edificio</TableCell>
              <TableCell align="left">Tipo de usuario</TableCell>
              <TableCell align="left">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.usuarios.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell component="th" scope="row">
                  {row.nombre}
                </TableCell>
                <TableCell align="left">{row.apellido}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.edificio}</TableCell>
                <TableCell align="left">{row.tipoUsuario}</TableCell>
                <TableCell align="left">
                  <ButtonGroup>
                    <Button color="success">Activar</Button>
                    <Button onClick={() => handleOpen(row)}>Editar</Button>
                    <Button
                      color="error"
                      onClick={() =>
                        dispatch({ type: "ELIMINAR_USUARIO", payload: row.id })
                      }
                    >
                      Eliminar
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {state.usuarioEdit && (
              <EditarUsuarioForm
                usuario={state.usuarioEdit}
                onSave={handleSaveEdit}
                onCancel={handleClose}
              />
            )}
          </Box>
        </Modal>
      </TableContainer>
    </Stack>
  );
};

export default Usuarios;
