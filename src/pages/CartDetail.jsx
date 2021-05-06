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
import CheckIcon from '@material-ui/icons/Check';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #00b09e 30%, #79fa6e 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

const CartDetail = (props) => {
  const classes = useStyles();

  function handleAddUnit(item) {
    props.onAddProduct(item.product);
  }

  function handleMinusUnit(item) {
    props.onMinusProduct(item.product);
  }

  function handleRemoveProduct(item) {
    props.onRemoveProduct(item.product);
  }

  function handleFinalizarCompraClick() {
    props.onFinishedBuy();
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
                Total ${props.products.map(p => p.product.price * p.quantity).reduce((a,b) => (a+b), 0)}
              </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: 'center'}}>
              <Button
                variant="contained"
                className={classes.root}
                startIcon={<CheckIcon />}
                onClick={handleFinalizarCompraClick}
              >
                Finalizar compra
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
