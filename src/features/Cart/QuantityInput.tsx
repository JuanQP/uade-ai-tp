import { ActionIcon, Group, NumberInput, Stack, Text } from "@mantine/core";
import { IconMinus, IconPlus } from "@tabler/icons";

interface Props {
  product: CartProduct;
  max: number;
  onChange: (product: CartProduct) => void;
}

export function QuantityInput({ product, max, onChange }: Props) {

  function handleQuantityDecrement() {
    const { quantity: newQuantity } = product;
    onChange({
      ...product,
      quantity: newQuantity - 1,
    })
  }

  function handleQuantityIncrement() {
    const { quantity: newQuantity } = product;
    onChange({
      ...product,
      quantity: newQuantity + 1,
    })
  }

  return (
    <Stack spacing="xs">
      <Group spacing={0}>
        <ActionIcon
          disabled={product.quantity === 1}
          variant="transparent"
          color="blue"
          onClick={handleQuantityDecrement}
        >
          <IconMinus />
        </ActionIcon>
        <NumberInput
          rightSectionWidth={36}
          hideControls
          readOnly
          value={product.quantity}
          max={max}
          min={0}
          styles={{ input: { width: 100, textAlign: 'center' } }}
        />
        <ActionIcon
          disabled={product.quantity === max}
          variant="transparent"
          color="blue"
          onClick={handleQuantityIncrement}
        >
          <IconPlus />
        </ActionIcon>
      </Group>
      <Text color="dimmed" size="sm" align="center">{`${max} disponibles`}</Text>
    </Stack>
  );
}
