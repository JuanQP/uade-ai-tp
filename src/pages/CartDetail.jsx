import {
  Alert,
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  List,
} from '@material-ui/core';
import CartDetailItem from './CartDetailItem';

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
          <CardContent>
            {props.products.length === 0 ?
            // Si no hay productos...
            <Alert severity="info">Todavía no seleccionaste ningún producto. ¿Qué estás esperando? 😁</Alert>
            : // Si hay productos:
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
            </List>}
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}

export default CartDetail;
