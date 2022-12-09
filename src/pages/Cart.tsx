import { CartItems } from "@/features/Cart/CartItems";
import { useCart } from "@/hooks/useCart";
import { Anchor, Box, Button, Center, Divider, Paper, Text } from "@mantine/core";
import { useIsAuthenticated } from "react-auth-kit";
import { Link } from "react-router-dom";

export function Cart() {

  const isAuth = useIsAuthenticated()
  const { cart, update, removeProduct } = useCart()
  const total = cart.reduce((total, product) => total + product.quantity * product.product.price, 0)

  if(cart.length === 0) {
    return (
      <Center mt="md" sx={{ flexDirection: 'column', gap: 20 }}>
        <Text size="xl" align="center">
          El carrito está vacío
        </Text>
        <Text color="dimmed" align="center">
          ¡No te preocupes! Tenemos un montón de productos para vos 👇
        </Text>
        <Button component={Link} to="/product-search">Ver productos</Button>
      </Center>
    )
  }

  return (
    <Paper withBorder shadow="xs" p="lg">
      <CartItems cart={cart} onChange={update} onDelete={removeProduct} />
      <Text sx={{ fontSize: '2rem' }} align="end">
        Total $ {total.toFixed(2)}
      </Text>
      <Divider my="lg" />
      <Box display="flex" sx={{ justifyContent: 'end' }}>
        <Button
          component={Link}
          to="/checkout"
          size="lg"
          variant="gradient"
          gradient={{ from: 'blue', to: 'green.4'}}
          >
          Continuar compra
        </Button>
      </Box>
      {isAuth() ? null : (
        <Text color="dimmed" align="center" mt="lg">
          ¿Tenés cuenta? Hacer las compras es más fácil si estás logeado 😌.
          {' '}<Anchor component={Link} to="/login">Ingresá con tu cuenta</Anchor>
        </Text>
      )}
    </Paper>
  )
}
