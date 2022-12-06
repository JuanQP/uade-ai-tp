import { Box, Button, Divider, Grid, Stack, Text } from "@mantine/core";
import { ReviewStepItem } from "./ReviewStepItem";

interface Props {
  order: {
    user: OrderUser;
    address: OrderAddress;
    payment: OrderPayment;
    products: CartProduct[];
  }

  onSubmitOrder: () => void;
}

export function ReviewStep({ order, onSubmitOrder }: Props) {

  const total = order
    .products
    .reduce((total, product) => total + product.quantity * product.product.price, 0)

  return (
    <Grid>
      <Grid.Col xs={12} md={6}>
        <Stack align="center" spacing={0}>
          <Text size="xl">Cliente</Text>
          <Text color="dimmed">Nombre</Text>
          <Text fw="bold">{order.user.firstName}</Text>
          <Text color="dimmed">Apellido</Text>
          <Text fw="bold">{order.user.lastName}</Text>
          <Text color="dimmed">E-Mail</Text>
          <Text fw="bold">{order.user.email}</Text>
          <Text size="xl">Dirección</Text>
          <Text color="dimmed">Dirección</Text>
          <Text fw="bold">{order.address.address1}</Text>
          <Text color="dimmed">Ciudad</Text>
          <Text fw="bold">{order.address.city}</Text>
          <Text color="dimmed">Provincia</Text>
          <Text fw="bold">{order.address.province}</Text>
          <Text color="dimmed">Código postal</Text>
          <Text fw="bold">{order.address.zip}</Text>
        </Stack>
      </Grid.Col>
      <Grid.Col xs={12} md={6}>
        <Stack align="center" spacing={0}>
          <Text size="xl">Pago</Text>
          <Text color="dimmed">Dirección</Text>
          <Text fw="bold">{order.payment.address1}</Text>
          <Text color="dimmed">Ciudad</Text>
          <Text fw="bold">{order.payment.city}</Text>
          <Text color="dimmed">Provincia</Text>
          <Text fw="bold">{order.payment.province}</Text>
          <Text color="dimmed">Código postal</Text>
          <Text fw="bold">{order.payment.zip}</Text>
          <Text color="dimmed">Nombre</Text>
          <Text fw="bold">{order.payment.cardName}</Text>
          <Text color="dimmed">Número de tarjeta</Text>
          <Text fw="bold">{order.payment.cardNumber}</Text>
          <Text color="dimmed">Fecha de expiración</Text>
          <Text fw="bold">{order.payment.expDate}</Text>
          <Text color="dimmed">CVV</Text>
          <Text fw="bold">{order.payment.cvv}</Text>
        </Stack>
      </Grid.Col>
      <Grid.Col xs={12}>
        <Divider my="lg" />
        <Text size="xl">Tus productos</Text>
      </Grid.Col>
      {order.products.map(product => (
        <Grid.Col key={product.product._id} xs={12}>
          <ReviewStepItem product={product} />
        </Grid.Col>
      ))}
      <Grid.Col xs={12}>
        <Divider my="lg"/>
        <Text align="end">Total</Text>
        <Text align="end" sx={{ fontSize: '1.5rem' }}>$ {total}</Text>
      </Grid.Col>
      <Grid.Col xs={12}>
        <Divider my="lg"/>
        <Box display="flex">
          <Button
            ml="auto"
            size="lg"
            variant="gradient"
            gradient={{ from: 'blue', to: 'green.4'}}
            onClick={onSubmitOrder}
          >
            Finalizar compra
          </Button>
        </Box>
      </Grid.Col>
    </Grid>
  )
}
