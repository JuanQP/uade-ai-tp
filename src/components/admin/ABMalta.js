import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';


const ABMalta = (props) => {
  const [values, setValues] = useState({
    producto: 'Mouse',
    marca: 'Genius',
    modelo: 'DX-110',
    interfaz: 'USB',
    peso: 'Aprox. 85g',
    stock: '30',
    precio: '$500',
    fechaIngreso: '05/05/2021'
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="Ingrese los datos para publicar un nuevo producto"
          title="Productos"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Producto"
                name="producto"
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Marca"
                name="marca"
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Modelo"
                name="modelo"
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Interfaz"
                name="interfaz"
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Peso"
                name="peso"
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Stock"
                name="stock"
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Precio"
                name="precio"
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Fecha de ingreso"
                name="fechadeingreso"
                onChange={handleChange}
                required
                variant="outlined"
              >  
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button 
            color="primary"
            variant="contained"
          >
            Cargar Foto
          </Button>
          <Button sx={{ mx: 40 }}
            color="primary"
            variant="contained"
          >
            Guardar
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default ABMalta;
