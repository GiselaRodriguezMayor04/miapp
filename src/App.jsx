// Appgrid.jsx
import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Appgrid = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Button variant="contained" fullWidth>
          Botón 1
        </Button>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Button variant="contained" fullWidth>
          Botón 2
        </Button>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Button variant="contained" fullWidth>
          Botón 3
        </Button>
      </Grid>
    </Grid>
  );
};

export default Appgrid;
