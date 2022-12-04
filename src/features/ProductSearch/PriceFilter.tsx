import { Button, NumberInput, Stack, Text } from "@mantine/core";
import { useState } from "react";

interface Props {
  label: string;
  onSubmit: (minimumPrice: number | undefined, maximumPrice: number | undefined) => void;
}

export function PriceFilter({ label, onSubmit }: Props) {

  const [minPrice, setMinPrice] = useState<number | undefined>()
  const [maxPrice, setMaxPrice] = useState<number | undefined>()

  return (
    <>
      <Text fw="bold" size="sm">{label}</Text>
      <Stack>
        <NumberInput
          placeholder="Mínimo"
          hideControls
          value={minPrice}
          onChange={(newValue) => setMinPrice(newValue)}
        />
        <NumberInput
          placeholder="Máximo"
          hideControls
          value={maxPrice}
          onChange={(newValue) => setMaxPrice(newValue)}
        />
        <Button fullWidth onClick={() => onSubmit(minPrice, maxPrice)}>
          Filtrar precios
        </Button>
      </Stack>
    </>
  )
}
