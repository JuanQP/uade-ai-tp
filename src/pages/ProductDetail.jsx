import { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ClickSparkle from 'src/components/ClickSparkle';

const useStyles = makeStyles((theme) => ({
  magicButton: {
    height: '100%',
    '&:hover': {
      animation: `$myEffect 250ms ${theme.transitions.easing.easeInOut}`,
      animationFillMode: 'forwards',
    }
  },
  "@keyframes myEffect": {
    "0%": {
    },
    "100%": {
      background: 'linear-gradient(45deg, #00b09e 30%, #79fa6e 90%)',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const ProductDetail = (props) => {
  const classes = useStyles();
  const { product_id } = useParams();
  const products = props.productsdb;
  const product = products.find(p => p.id === product_id);
  const [quantity, setQuantity] = useState(1);

  function handleChange(e) {
    setQuantity(e.target.value);
  }

  function handleAgregarClick() {
    props.onAgregarClick(product, quantity);
  }

  return (
    <Container maxWidth="lg">
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardContent>
          <Grid sx={{marginTop: 3}} container spacing={3}>
            <Grid sx={{width: '100%'}} item md={6} sm={12}>
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
                  align="center"
                  sx={{
                    height: 170,
                    width: 230
                  }}
                >
                  <BrokenImageIcon />
                </Avatar>
              </Box>
            </Grid>
            <Grid align="center" item md={6} sm={12}>
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h1"
              >
                {`${product.producto} ${product.marca} ${product.modelo}`}
              </Typography>
              <Typography
                color="#009688"
                variant="subtitle1"
                sx={{fontSize: 30}}
                mb={2}
              >
                $ {product.precio}
              </Typography>
              <Grid container sx={{justifyContent: 'center'}}>
                <Grid item md={6} sm={12}>
                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Cantidad</InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={quantity}
                      onChange={handleChange}
                      label="Cantidad"
                    >
                      <MenuItem value={1}>1 unidad</MenuItem>
                      <MenuItem value={2}>2 unidades</MenuItem>
                      <MenuItem value={3}>3 unidades</MenuItem>
                      <MenuItem value={4}>4 unidades</MenuItem>
                      <MenuItem value={5}>5 unidades</MenuItem>
                      <MenuItem value={6}>6 unidades</MenuItem>
                      <MenuItem value={7}>7 unidades</MenuItem>
                      <MenuItem value={8}>8 unidades</MenuItem>
                      <MenuItem value={9}>9 unidades</MenuItem>
                      <MenuItem value={10}>10 unidades</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item md={6} sm={12}>
                  <ClickSparkle style={{height: '100%'}} text={`+${quantity}`}>
                    <Button
                      className={classes.magicButton}
                      variant="contained"
                      color="primary"
                      startIcon={<AddShoppingCartIcon />}
                      onClick={handleAgregarClick}
                    >
                      Agregar al carrito
                    </Button>
                  </ClickSparkle>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid sx={{marginTop: 3}} container spacing={3}>
            <Grid item xs={6} md={3}>
              <Typography color="textPrimary" variant="h4">Marca</Typography>
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {product.marca}
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography color="textPrimary" variant="h4">Modelo</Typography>
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {product.modelo}
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography color="textPrimary" variant="h4">Conector</Typography>
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {product.conect}
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
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
            <Grid item xs={12}>
            <Typography color="textPrimary" variant="h4">Descripción</Typography>
            {product.descripcion === '' ?
              <Typography
                color="textSecondary"
                variant="body1"
              >
                <em>No se proporcionó una descripción</em>
              </Typography>
              :
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {product.descripcion}
              </Typography>
            }
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  )
}

export default ProductDetail;
