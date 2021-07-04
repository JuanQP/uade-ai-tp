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
import * as Yup from 'yup';
import { useFormik } from 'formik';

const ABMmodificar = ({...props}) => {
  const { product_id } = useParams();
  const [values, setValues] = useState({
    img: '',
  });
  const [waitingServer, setWaitingServer] = useState(true);
  const [open, setOpen] = useState(false);
  const [serverMessage, setServerMessage] = useState('');
  const [messageType, setMessageType] = useState('success');
  const [mostrarImagenStatus, setMostrarImagenStatus] = useState(false);
  const [subiendoImagen, setSubiendoImagen] = useState(false);
  const [imagenOk, setImagenOk] = useState(true);
  const [imagenSubida, setImagenSubida] = useState('');

  const formik = useFormik({
    initialValues: {
      nombre: '',
      categoria: '',
      marca: '',
      modelo: '',
      interfaz: '',
      peso: '',
      stock: 0,
      precio: 0,
      descripcion: '',
    },
    validationSchema: Yup.object().shape({
      nombre: Yup.string().max(255).required('Campo requerido'),
      categoria: Yup.string().max(255).required('Campo requerido'),
      marca: Yup.string().max(255).required('Campo requerido'),
      modelo: Yup.string().max(255).required('Campo requerido'),
      interfaz: Yup.string().max(255),
      peso: Yup.string().max(255),
      stock: Yup.number().integer("Tiene que ser un número entero").positive("Tiene que ser positivo").required("Campo requerido"),
      precio: Yup.number().positive("Tiene que ser positivo").required("Campo requerido"),
      descripcion: Yup.string().max(255),
    }),
    onSubmit: (values) => {
      handleFormikSubmit(values);
    },
    validateOnBlur: true,
    validateOnChange: false,
    enableReinitialize: true,
  });

  function handleFormikSubmit(newValues) {
    if (formik.isValid) {
      handleUpdateProduct({
        ...newValues,
        img: values.img,
      });
    }
  }

  useEffect(() => {
    refreshPage(product_id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product_id]);

  function handleUpdateProduct(updatedProduct) {
    axios.put('/products/', updatedProduct)
    .then((res) => {
      setValues({img: res.data.data.img});
      formik.setValues(res.data.data);
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
      setValues({img: res.data.data.img});
      formik.setValues(res.data.data);
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
          onSubmit={formik.handleSubmit}
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
                    onChange={formik.handleChange}
                    required
                    variant="outlined"
                    placeholder="Teclado inalámbrico Genius"
                    error={Boolean(formik.touched.nombre && formik.errors.nombre)}
                    helperText={formik.touched.nombre && formik.errors.nombre}
                    onBlur={formik.handleBlur}
                    value={formik.values.nombre}
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
                    onChange={formik.handleChange}
                    required
                    variant="outlined"
                    error={Boolean(formik.touched.categoria && formik.errors.categoria)}
                    helperText={formik.touched.categoria && formik.errors.categoria}
                    onBlur={formik.handleBlur}
                    value={formik.values.categoria}
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
                    onChange={formik.handleChange}
                    required
                    variant="outlined"
                    error={Boolean(formik.touched.marca && formik.errors.marca)}
                    helperText={formik.touched.marca && formik.errors.marca}
                    onBlur={formik.handleBlur}
                    value={formik.values.marca}
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
                    onChange={formik.handleChange}
                    required
                    variant="outlined"
                    error={Boolean(formik.touched.modelo && formik.errors.modelo)}
                    helperText={formik.touched.modelo && formik.errors.modelo}
                    onBlur={formik.handleBlur}
                    value={formik.values.modelo}
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
                    onChange={formik.handleChange}
                    variant="outlined"
                    error={Boolean(formik.touched.interfaz && formik.errors.interfaz)}
                    helperText={formik.touched.interfaz && formik.errors.interfaz}
                    onBlur={formik.handleBlur}
                    value={formik.values.interfaz}
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
                    onChange={formik.handleChange}
                    variant="outlined"
                    error={Boolean(formik.touched.peso && formik.errors.peso)}
                    helperText={formik.touched.peso && formik.errors.peso}
                    onBlur={formik.handleBlur}
                    value={formik.values.peso}
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
                    onChange={formik.handleChange}
                    required
                    variant="outlined"
                    type="number"
                    error={Boolean(formik.touched.stock && formik.errors.stock)}
                    helperText={formik.touched.stock && formik.errors.stock}
                    onBlur={formik.handleBlur}
                    value={formik.values.stock}
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
                    onChange={formik.handleChange}
                    required
                    variant="outlined"
                    type="number"
                    InputProps={{
                      startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                    error={Boolean(formik.touched.precio && formik.errors.precio)}
                    helperText={formik.touched.precio && formik.errors.precio}
                    onBlur={formik.handleBlur}
                    value={formik.values.precio}
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
                    onChange={formik.handleChange}
                    required
                    variant="outlined"
                    multiline
                    rows={3}
                    error={Boolean(formik.touched.descripcion && formik.errors.descripcion)}
                    helperText={formik.touched.descripcion && formik.errors.descripcion}
                    onBlur={formik.handleBlur}
                    value={formik.values.descripcion}
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
                type="submit"
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
