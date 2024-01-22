// components/HeaderComponent.js
import React from 'react';
import Typography from '@mui/material/Typography';

const HeaderComponent = ({ title }) => {
  return (
    <header>
      <Typography variant="h4" component="div" gutterBottom>
        {title}
      </Typography>
    </header>
  );
};

export default HeaderComponent;
