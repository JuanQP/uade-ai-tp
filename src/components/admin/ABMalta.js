import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  InputAdornment,
  TextField,
} from '@material-ui/core';


const ABMalta = ({onNewProduct, ...props}) => {
  const [values, setValues] = useState({
    img: '',
    producto: '',
    marca: '',
    modelo: '',
    conect: '',
    peso: '',
    stock: 0,
    precio: 0,
    fechaIngreso: '',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  function handleNewProduct() {
    onNewProduct(values);
  }

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
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
                    name="conect"
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
                    type="number"
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
                    type="number"
                    InputProps={{
                      startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
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
                    name="fechaIngreso"
                    onChange={handleChange}
                    required
                    variant="outlined"
                  >
                  </TextField>
                </Grid>
                <Grid
                  item
                  md={12}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Descripción"
                    name="descripcion"
                    onChange={handleChange}
                    required
                    variant="outlined"
                    multiline
                    rows={3}
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
                onClick={handleNewProduct}
              >
                Guardar
              </Button>
            </Box>
          </Card>
        </form>
      </Container>
    </Box>
  );
};

export default ABMalta;
