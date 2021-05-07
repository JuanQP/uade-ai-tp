import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useParams } from 'react-router-dom';

const ProductDetail = (props) => {
  const { product_id } = useParams();
  const products = props.productsdb;
  const product = products.find(p => p.id === product_id);

  function handleAgregarClick() {
    props.onAgregarClick(product);
  }

  return (
    <Card
      sx={{
        m: 3,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pb: 3
          }}
        >
          <Avatar
            src={product.img}
            alt="Product"
            variant="square"
            sx={{
              height: 170,
              width: 230
            }}
          />
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {`${product.producto} ${product.marca} ${product.modelo}`}
        </Typography>
        <Grid sx={{marginTop: 3}} container spacing={3}>
          <Grid item xs={3}>
            <Typography color="textPrimary" variant="h4">Marca</Typography>
            <Typography
              color="textPrimary"
              variant="body1"
            >
              {product.marca}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography color="textPrimary" variant="h4">Modelo</Typography>
            <Typography
              color="textPrimary"
              variant="body1"
            >
              {product.modelo}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography color="textPrimary" variant="h4">Conector</Typography>
            <Typography
              color="textPrimary"
              variant="body1"
            >
              {product.conect}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography color="textPrimary" variant="h4">Peso</Typography>
            <Typography
              color="textPrimary"
              variant="body1"
            >
              {product.peso}
            </Typography>
          </Grid>
        </Grid>
        <Grid sx={{marginTop: 3}} container spacing={3}>
          <Grid item xs={6}>
          <Typography color="textPrimary" variant="h4">Descripción</Typography>
          <Typography
            color="textPrimary"
            variant="body1"
          >
            {product.descripcion}
          </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography color="textPrimary" variant="h4">Precio</Typography>
            <Typography
              color="textPrimary"
              variant="body1"
            >
              ${product.precio}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <Box sx={{ flexGrow: 4 }} />
      <Divider />
      <CardActions sx={{justifyContent: 'center'}}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddShoppingCartIcon />}
          onClick={handleAgregarClick}
        >
          Agregar
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProductDetail;
