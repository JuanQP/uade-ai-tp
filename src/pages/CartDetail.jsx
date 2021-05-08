import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  List,
  Typography,
} from '@material-ui/core';
import CartDetailItem from './CartDetailItem';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link as RouterLink } from 'react-router-dom';

const CartDetail = (props) => {

  function handleAddUnit(item) {
    props.onAddProduct(item.product);
  }

  function handleMinusUnit(item) {
    props.onMinusProduct(item.product);
  }

  function handleRemoveProduct(item) {
    props.onRemoveProduct(item.product);
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
        <Card>
          <CardHeader
            title="Resumen del Carrito"
            subheader="Acá podés ver todos los productos que elegiste 😁"
          />
          {props.products.length === 0 ?
            // Si no hay productos...
            <CardContent>
              <Alert severity="info">Todavía no seleccionaste ningún producto. ¿Qué estás esperando? 😁</Alert>
            </CardContent> :
            // Si hay productos...
            <>
            <CardContent>
              {props.user.isGuest ?
              <Alert severity="info">
                No estás logeado. <RouterLink to="/login">¿Tenés una cuenta? Ingresá</RouterLink>. Hacer las compras es más fácil si estás registrado 👌.
              </Alert>
              : null}
              <List>
                {props.products.map(p => (
                  <CartDetailItem
                    key={p.product.id}
                    item={p}
                    onAddUnit={handleAddUnit}
                    onMinusUnit={handleMinusUnit}
                    onRemoveProduct={handleRemoveProduct}
                  />
                ))}
              </List>
              <Typography variant="h3" paragraph>
                Total ${props.products.map(p => p.product.precio * p.quantity).reduce((a,b) => (a+b), 0)}
              </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: 'center'}}>
              <Button
                variant="contained"
                endIcon={<ChevronRightIcon />}
                component={RouterLink}
                to='/app/checkout'
              >
                Ir al pago
              </Button>
            </CardActions>
            </>
          }
        </Card>
      </Container>
    </Box>
  )
}

export default CartDetail;
