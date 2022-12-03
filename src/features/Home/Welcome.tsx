import { MantineGradient, Text, Title } from "@mantine/core";

export function Welcome() {

  const gradient: MantineGradient = {
    from: 'teal',
    to: 'cyan',
    deg: 135,
  }

  return (
    <>
      <Title variant="gradient" gradient={gradient} align="center" fw={400}>
        FQ Computer
      </Title>
      <Text align="center" color="dimmed">Todo lo que buscás en tecnología está acá.</Text>
    </>
  )
}
