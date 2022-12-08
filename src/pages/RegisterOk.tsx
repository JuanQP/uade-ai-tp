import { Anchor, Paper, Stack, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";

export function RegisterOk() {

  return (
    <Paper
      withBorder
      shadow="md"
      p="xl"
      sx={{ width: '100%' }}
    >
      <Stack>
        <Title>Todo listo 🚀</Title>
        <Text>La cuenta ya fue creada 👏</Text>
        <Text>Te recomendamos que guardes tu tarjeta 💳 y tus datos 🧑‍🦱 para hacer las compras más rápido 😊.</Text>
        <Text>El próximo paso es <Anchor component={Link} to="/login">ingresar a la app 👈</Anchor></Text>
      </Stack>
    </Paper>
  )
}
