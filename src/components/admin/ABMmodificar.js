import { useEffect, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Container,
  Divider,
  Grid,
  InputAdornment,
  Snackbar,
  TextField,
  Typography,
} from '@material-ui/core';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ABMmodificar = ({...props}) => {
  const { product_id } = useParams();
  const [values, setValues] = useState({});
  const [waitingServer, setWaitingServer] = useState(true);
  const [open, setOpen] = useState(false);
  const [serverMessage, setServerMessage] = useState('');
  const [messageType, setMessageType] = useState('success');
  const [mostrarImagenStatus, setMostrarImagenStatus] = useState(false);
  const [subiendoImagen, setSubiendoImagen] = useState(false);
  const [imagenOk, setImagenOk] = useState(true);
  const [imagenSubida, setImagenSubida] = useState('');

  useEffect(() => {
    refreshPage(product_id);
  }, [product_id]);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  function handleUpdateProduct() {
    axios.put('/products/', values)
    .then((res) => {
      setValues(res.data.data);
      setServerMessage(res.data.message);
      setMessageType('success');
    })
    .catch((err) => {
      setServerMessage(err.response.data.message);
      setMessageType('error');
    })
    .finally(() => {
      setOpen(true);
    });
  }

  function refreshPage(product_id) {
    setWaitingServer(true);
    axios.get('/products/detail/' + product_id)
    .then((res) => {
      setValues(res.data.data);
    })
    .finally(() =>{
      setWaitingServer(false);
    });
  }

  function handleClose() {
    setOpen(false);
  }

  if(waitingServer) {
    return (
      <Box
        sx={{ display: 'flex', justifyContent: 'center'}}
      >
        <CircularProgress color="inherit" />
      </Box>
    );
  }
  function handleFileChange(e) {
    setSubiendoImagen(true);
    setMostrarImagenStatus(true);
    const formData = new FormData()
    formData.append("files", e.target.files[0]);
    axios.post('/utils/upload', formData, {
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
              subheader="Ingrese los datos a modificar del producto"
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
                    value={values.nombre}
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Categoria"
                    name="categoria"
                    onChange={handleChange}
                    required
                    variant="outlined"
                    value={values.categoria}
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
                    value={values.marca}
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
                    value={values.modelo}
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
                    value={values.interfaz}
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
                    value={values.peso}
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
                    value={values.stock}
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
                    value={values.precio}
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
                    value={values.descripcion}
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
                onClick={handleUpdateProduct}
              >
                Guardar
              </Button>
            </Box>
          </Card>
        </form>
        <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'center'}} open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert variant="filled" onClose={handleClose} severity={messageType}>
            {serverMessage}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default ABMmodificar;
