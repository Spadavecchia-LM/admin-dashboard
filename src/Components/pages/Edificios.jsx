// Edificios.js
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
import EditarEdificioForm from "../Utils/EditarEdificioForm";
import { GlobalContext } from "../../Context";
import TableFilter from "../TableFilter";
import { useNavigate } from "react-router-dom";

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

const Edificios = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()

  const { state, dispatch } = useContext(GlobalContext);

  const handleOpen = (edificio) => {
    dispatch({ type: "EDITAR_EDIFICIO", payload: edificio });
    setOpen(true);
  };

  const handleClose = () => {
    dispatch({ type: "EDITAR_EDIFICIO", payload: null });
    setOpen(false);
  };

  const handleSaveEdit = (editedEdificio) => {
    dispatch({ type: "GUARDAR_EDIFICIO_EDITADO", payload: editedEdificio });
    handleClose();
  };
  const handleAddEdificio = () => {
    dispatch({ type: "GUARDAR_EDIFICIO", payload: null });
    setOpen(true);
  };

  return (
    <Stack alignItems="center">
      <Typography variant="h3">Lista de Edificios</Typography>
      <TableFilter/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell align="left">Dirección</TableCell>
              <TableCell align="left">Razón Social</TableCell>
              <TableCell align="left">CUIT</TableCell>
              <TableCell align="left">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.edificios.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left">{row.nombre}</TableCell>
                <TableCell align="left">{row.direccion}</TableCell>
                <TableCell align="left">{row.razonSocial}</TableCell>
                <TableCell align="left">{row.cuit}</TableCell>
                <TableCell align="left">
                  <ButtonGroup>
                    <Button
                      color="error"
                      onClick={() =>
                        dispatch({ type: "ELIMINAR_EDIFICIO", payload: row.id })
                      }
                    >
                      Eliminar
                    </Button>
                    <Button onClick={() => handleOpen(row)}>Editar</Button>
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
            {state.edificioEdit && (
              <EditarEdificioForm
                edificio={state.edificioEdit}
                onSave={handleSaveEdit}
                onCancel={handleClose}
              />
            )}
          </Box>
        </Modal>
      </TableContainer>
      <Button
        color="primary"
        variant="contained"
        sx={{ margin: "50px auto" }}
        onClick={() => navigate("/agregarEdificio")}
      >
        Agregar un edificio
      </Button>
    </Stack>
  );
};

export default Edificios;
