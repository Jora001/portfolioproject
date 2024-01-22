// components/Navbar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet, Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src="https://ld-wp73.template-help.com/monstroid2/v2/landing/wp-content/uploads/2023/10/Logo.svg" alt="  logo" />
        </Typography>

        {/* Display menu button for smaller screens */}
        <IconButton size="large" edge="start" color="inherit" onClick={handleMenuOpen} sx={{ display: { md: 'none' } }}>
          <MenuIcon />
        </IconButton>

        {/* Navigation links for larger screens */}
        <Button color="inherit" component={RouterLink} to="/">
          Home
        </Button>
        <Button color="inherit" component={RouterLink} to="/about">
          About
        </Button>
        <Button color="inherit" component={RouterLink} to="/contact">
          Contact
        </Button>

        {/* Responsive menu for smaller screens */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuItem onClick={handleMenuClose} component={RouterLink} to="/">
            Home
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={RouterLink} to="/about">
            About
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={RouterLink} to="/contact">
            Contact
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>

    <Outlet/>
    </>
  );
};

export default Navbar;
