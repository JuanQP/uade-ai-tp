import { Group, Image, Stack, Text } from "@mantine/core";

interface Props {
  product: CartProduct;
}

export function ReviewStepItem({ product }: Props) {

  const singleUnit = product.quantity === 1

  return (
    <Group>
      <Image
        src={product.product.image}
        fit="contain"
        height={100}
        width={100}
      />
      <Stack>
        <Text>{product.product.name}</Text>
        <Text color="dimmed">$ {product.product.price} (c/u)</Text>
        <Text color="dimmed">{product.quantity} {singleUnit ? 'unidad' : 'unidades'}</Text>
      </Stack>
      <Text ml="auto" sx={{ fontSize: '1.5rem' }}>
        $ {(product.product.price * product.quantity).toFixed(2)}
      </Text>
    </Group>
  )
}
