import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  Typography,
} from '@material-ui/core';
import axios from 'axios';

const ABMalta = ({...props}) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    img: '',
    nombre: '',
    categoria: '',
    marca: '',
    modelo: '',
    interfaz: '',
    peso: '',
    stock: 0,
    precio: 0,
    fechaIngreso: '',
  });
  const [mostrarImagenStatus, setMostrarImagenStatus] = useState(false);
  const [subiendoImagen, setSubiendoImagen] = useState(false);
  const [imagenOk, setImagenOk] = useState(true);
  const [imagenSubida, setImagenSubida] = useState('');

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  function handleNewProduct() {
    axios.post('http://localhost:4000/products/', values)
    .then((res) => {
      navigate('/admin/ABM');
      alert(res.data.message);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleFileChange(e) {
    setSubiendoImagen(true);
    setMostrarImagenStatus(true);
    const formData = new FormData()
    formData.append("files", e.target.files[0]);
    axios.post('http://localhost:4000/utils/upload', formData, {
      headers: {"Content-Type": "multipart/form-data"}
    })
    .then((res) => {
      setImagenOk(true);
      setImagenSubida(res.data.url);
      setValues({
        ...values,
        img: res.data.url,
      })
    })
    .catch((err) => {
      console.log(err);
      setImagenOk(false);
    })
    .finally(() => {
      setSubiendoImagen(false);
    });
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
                  {/* <TextField
                    fullWidth
                    label="Nombre de Imagen"
                    name="img"
                    onChange={handleChange}
                    required
                    variant="outlined"
                    placeholder="/static/images/products/product_1.png"
                  /> */}
                  <Button
                    variant="contained"
                    component="label"
                  >
                    Elegir imagen
                    <input
                      type="file"
                      hidden
                      onChange={handleFileChange}
                    />
                  </Button>
                  {
                    mostrarImagenStatus ?
                    <Typography>
                      {subiendoImagen ? "Subiendo imagen..."
                        : imagenOk ? `La imagen ${imagenSubida} se subio correctamente!`
                          : "Error al subir imagen..."
                      }
                    </Typography>
                    : null
                  }
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Nombre"
                    name="nombre"
                    onChange={handleChange}
                    required
                    variant="outlined"
                    placeholder="Teclado inalámbrico Genius"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Categoría"
                    name="categoria"
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
                    type="number"
                  />
                </Grid>
                <Grid
                  item
                  md={12}
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
              <Button sx={{ mx: 70 }}
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
