import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import  Avatar  from '@mui/material/Avatar';
import { Stack, Typography } from '@mui/material';


const NavBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
  return (
    <Stack alignItems="center" flexDirection="row" justifyContent="space-between">
         <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Avatar sx={{ bgcolor: "pink" }}>U</Avatar>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Mi Cuenta</MenuItem>
        <MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem>
      </Menu>
      <Typography>
        admin@gmail.com
      </Typography>
    </Stack>
  )
}

export default NavBar