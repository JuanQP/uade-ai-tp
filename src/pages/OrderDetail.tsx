import { ReviewStepItem } from "@/features/Checkout/ReviewStepItem";
import * as orderAPI from "@/services/orderAPI";
import { Badge, Divider, Grid, Loader, Stack, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export function OrderDetail() {

  const { id } = useParams()
  const navigate = useNavigate()
  const [fetching, setFetching] = useState(true)
  const [order, setOrder] = useState<Order>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(!id) throw new Error("Es necesario el ID de una orden de compra")
        const newOrder = await orderAPI.getOrder(id)
        setOrder(newOrder)
      } catch (error) {
        console.error(error)
        navigate('/')
      } finally {
        setFetching(false)
      }
    }
    fetchData()
  }, [])

  if(fetching) {
    return <Loader />
  }

  if(!order) {
    return <Navigate to="/" />
  }

  return (
    <>
      <Title mb="md">Orden de compra</Title>
      <Grid>
        <Grid.Col xs={12} md={6}>
          <Stack align="center" spacing={0}>
            <Text size="xl">Cliente</Text>
            <Text color="dimmed">Nombre</Text>
            <Text fw="bold">{order.buyOrder.user.firstName}</Text>
            <Text color="dimmed">Apellido</Text>
            <Text fw="bold">{order.buyOrder.user.lastName}</Text>
            <Text color="dimmed">E-Mail</Text>
            <Text fw="bold">{order.buyOrder.user.email}</Text>
            <Text size="xl">Dirección</Text>
            <Text color="dimmed">Dirección</Text>
            <Text fw="bold">{order.buyOrder.address.address1}</Text>
            <Text color="dimmed">Ciudad</Text>
            <Text fw="bold">{order.buyOrder.address.city}</Text>
            <Text color="dimmed">Provincia</Text>
            <Text fw="bold">{order.buyOrder.address.province}</Text>
            <Text color="dimmed">Código postal</Text>
            <Text fw="bold">{order.buyOrder.address.zip}</Text>
          </Stack>
        </Grid.Col>
        <Grid.Col xs={12} md={6}>
          <Stack align="center" spacing={0}>
            <Text size="xl">Pago</Text>
            <Text color="dimmed">Dirección</Text>
            <Text fw="bold">{order.buyOrder.payment.address1}</Text>
            <Text color="dimmed">Ciudad</Text>
            <Text fw="bold">{order.buyOrder.payment.city}</Text>
            <Text color="dimmed">Provincia</Text>
            <Text fw="bold">{order.buyOrder.payment.province}</Text>
            <Text color="dimmed">Código postal</Text>
            <Text fw="bold">{order.buyOrder.payment.zip}</Text>
            <Text color="dimmed">Nombre</Text>
            <Text fw="bold">{order.buyOrder.payment.cardName}</Text>
            <Text color="dimmed">Número de tarjeta</Text>
            <Text fw="bold">{order.buyOrder.payment.cardNumber}</Text>
            <Text color="dimmed">Fecha de expiración</Text>
            <Text fw="bold">{order.buyOrder.payment.expDate}</Text>
            <Text color="dimmed">CVV</Text>
            <Text fw="bold">{order.buyOrder.payment.cvv}</Text>
          </Stack>
        </Grid.Col>
        <Grid.Col xs={12}>
          <Divider my="lg" />
          <Text size="xl">Tus productos</Text>
        </Grid.Col>
        {order.buyOrder.products.map(product => (
          <Grid.Col key={product._id} xs={12}>
            <ReviewStepItem product={product} />
          </Grid.Col>
        ))}
        <Grid.Col xs={12}>
          <Divider my="lg"/>
          <Text>Fecha de compra: <strong>{order.orderDate}</strong></Text>
          <Text>Fecha estimada de entrega: <strong>{order.deliveryDate}</strong></Text>
          <Text>Estado actual: <Badge variant="filled">{order.status}</Badge></Text>
          <Text>Productos totales: <strong>{order.quantity}</strong></Text>
          <Text align="end">Total</Text>
          <Text align="end" sx={{ fontSize: '1.5rem' }}>$ {order.total}</Text>
        </Grid.Col>
      </Grid>
    </>
  )
}
