import { Helmet } from 'react-helmet';
import {
  Autocomplete,
  Box,
  Paper,
  CircularProgress,
  Container,
  Grid,
  Pagination,
  TextField,
} from '@material-ui/core';
import ProductCard from 'src/components/product//ProductCard';
import { Link as RouterLink } from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';

const ProductList = (props) => {

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [waitingServer, setWaitingServer] = useState(true);
  const [marcas, setMarcas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [ordenamientos] = useState([
    {label: 'Menor a mayor', value: 1},
    {label: 'Mayor a menor', value: -1},
  ]);
  const [marca, setMarca] = useState('');
  const [categoria, setCategoria] = useState('');
  const [ordenamiento, setOrdenamiento] = useState(null);

  useEffect(() => {
    axios.get('/products/', {params: {
      page: page,
      marca: marca === '' ? undefined : marca,
      categoria: categoria === '' ? undefined : categoria,
      ordenamiento: ordenamiento ? ordenamiento.value : undefined,
    }})
    .then((res) => {
      setProducts(res.data.data.docs);
      setPages(res.data.data.pages);
      setWaitingServer(false);
    });
  }, [page, marca, categoria, ordenamiento]);

  useEffect(() => {
    axios.get('/products/filters')
    .then((res) => {
      setCategorias(res.data.data.categorias);
      setMarcas(res.data.data.marcas);
    });
  }, []);

  function handleAgregarClick(product) {
    props.onAgregarClick(product);
  }

  function handlePageChange(event, value) {
    setPage(value);
  }

  function handleCategoriaChange(e, value) {
    setCategoria(value);
  }

  function handleMarcaChange(e, value) {
    setMarca(value);
  }

  function handleSortChange(e, value) {
    setOrdenamiento(value);
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

  return (
    <>
      <Helmet>
        <title>FQ Computer | Catálogo de Productos</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          {/* <ProductListToolbar /> */}
          <Grid
            container
            maxWidth={true}
            spacing={2}
          >
            <Grid item lg={4}>
              <Paper>
                <Autocomplete
                  disablePortal
                  id="combo-box-categorias"
                  options={categorias}
                  // sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Categoría" />}
                  onChange={handleCategoriaChange}
                />
              </Paper>
            </Grid>
            <Grid item lg={4}>
              <Paper>
                <Autocomplete
                  disablePortal
                  id="combo-box-marcas"
                  options={marcas}
                  // sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Marca" />}
                  onChange={handleMarcaChange}
                />
              </Paper>
            </Grid>
            <Grid item lg={4}>
              <Paper>
                <Autocomplete
                  disablePortal
                  id="combo-box-ordenar"
                  options={ordenamientos}
                  // sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Ordenar por Precio" />}
                  onChange={handleSortChange}
                />
              </Paper>
            </Grid>
          </Grid>
          <Box sx={{ pt: 3 }}>
            <Grid
              container
              spacing={3}
            >
              {products.map((product) => (
                <Grid
                  item
                  key={product._id}
                  lg={2.4}
                  md={6}
                  xs={12}
                >
                  {product.stock > 0 ?
                  <ProductCard
                    component={RouterLink}
                    to={'/app/product/' + product._id}
                    product={product}
                    onAgregarClick={handleAgregarClick}
                  /> :
                  <ProductCard
                    product={product}
                  />
                  }
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pt: 3
            }}
          >
            <Pagination
              color="primary"
              count={pages}
              size="small"
              onChange={handlePageChange}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default ProductList;
