import { Box, MantineGradient, Text, Title } from "@mantine/core";

export function Welcome() {

  const gradient: MantineGradient = {
    from: 'teal',
    to: 'cyan',
    deg: 135,
  }

  return (
    <Box>
      <Title pt="xl" align="center" order={1}>
        FQ Computer
      </Title>
      <Text align="center">Todo lo que buscás en tecnología está acá.</Text>
    </Box>
  )
}
