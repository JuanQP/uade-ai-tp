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
import * as Yup from 'yup';
import { useFormik } from 'formik';

const ABMalta = ({...props}) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    img: '',
  });
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
  });

  function handleFormikSubmit(newValues) {
    if (formik.isValid) {
      handleNewProduct({
        ...newValues,
        img: values.img,
      });
    }
  }

  function handleNewProduct(newProduct) {
    axios.post('/products/', newProduct)
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
                    onChange={formik.handleChange}
                    required
                    variant="outlined"
                    error={Boolean(formik.touched.categoria && formik.errors.categoria)}
                    helperText={formik.touched.categoria && formik.errors.categoria}
                    onBlur={formik.handleBlur}
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
      </Container>
    </Box>
  );
};

export default ABMalta;
