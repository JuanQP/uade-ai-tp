import { Helmet } from 'react-helmet';
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Pagination
} from '@material-ui/core';
import ProductListToolbar from 'src/components/product/ProductListToolbar';
import ProductCard from 'src/components/product//ProductCard';
import { Link as RouterLink } from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';

const ProductList = (props) => {

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [waitingServer, setWaitingServer] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:4000/products/', {params: {page: page}})
    .then((res) => {
      setProducts(res.data.data.docs);
      setPages(res.data.data.pages);
      setWaitingServer(false);
    });
  }, [page]);

  function handleAgregarClick(product) {
    props.onAgregarClick(product);
  }

  function handlePageChange(event, value) {
    setPage(value);
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
          <ProductListToolbar />
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
                  <ProductCard
                    component={RouterLink}
                    to={'/app/product/' + product._id}
                    product={product}
                    onAgregarClick={handleAgregarClick}
                  />
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
