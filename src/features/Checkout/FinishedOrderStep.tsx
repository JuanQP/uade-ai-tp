import { Button, Divider, Stack, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";

export function FinishedOrderStep() {
  return (
    <Stack align="center">
      <Title>Listo</Title>
      <Text align="center">
        Ya recibimos tu orden de compra. Vamos a hacer el envío a la dirección que nos indicaste.
      </Text>
      <Text align="center">
        En caso de que necesitemos contactarnos con vos te vamos
        a escribir a tu email.
      </Text>
      <Text align="center">
        En breve vas a tener novedades 😉
      </Text>
      <Divider my="xl" />
      <Text align="center" color="dimmed">
        Mientras tanto, seguí viendo nuestros productos 👇
      </Text>
      <Button component={Link} to="/product-search">
        Ver más productos
      </Button>
    </Stack>
  )
}
