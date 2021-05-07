import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';

const ProductCard = ({ product, onAgregarClick, ...rest }) => {
  function handleAgregarClick() {
    onAgregarClick(product);
  }

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
      {...rest}
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
          >
            <BrokenImageIcon />
          </Avatar>
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {`${product.producto} ${product.marca} ${product.modelo}`}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          ${product.precio}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 4 }} />
      <Divider />
      <Box sx={{ p: 2 }}>
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid
            item
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Button
              variant="contained"
              color="inherit"
              startIcon={<InfoIcon />}
              component={RouterLink}
              to={`/app/product/${product.id}`}
            >
              Detalles
            </Button>
          </Grid>
          <Grid
            item
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddShoppingCartIcon />}
              onClick={handleAgregarClick}
            >
              Agregar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductCard;
