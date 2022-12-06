import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid, TextInput } from "@mantine/core";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface Props {
  defaultValues: OrderAddress;
  onNextStep: (userInfo: OrderAddress) => void;
  onStepBack: () => void;
}

const schema = z.object({
  address1: z.string().min(1),
  province: z.string().min(1),
  city: z.string().min(1),
  zip: z.string().min(1).max(8),
})

export function AddressStep({ defaultValues, onNextStep, onStepBack }: Props) {

  const { register, formState: { isValid }, handleSubmit } = useForm<OrderAddress>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  return (
    <Box component="form" onSubmit={handleSubmit(onNextStep)}>
      <Grid>
        <Grid.Col xs={12} md={6}>
          <TextInput
            autoFocus
            label="Dirección"
            placeholder="Falsa 123"
            {...register('address1')}
          />
        </Grid.Col>
        <Grid.Col xs={12} md={6}>
          <TextInput
            label="Ciudad"
            placeholder="CABA"
            {...register('city')}
          />
        </Grid.Col>
        <Grid.Col xs={12} md={6}>
          <TextInput
            label="Provincia"
            placeholder="CABA"
            {...register('province')}
          />
        </Grid.Col>
        <Grid.Col xs={12} md={6}>
          <TextInput
            label="Código Postal"
            placeholder="9999"
            maxLength={8}
            {...register('zip')}
          />
        </Grid.Col>
        <Grid.Col xs={12}>
          <Button variant="subtle" onClick={onStepBack}>Anterior</Button>
          <Button disabled={!isValid} type="submit">Siguiente</Button>
        </Grid.Col>
      </Grid>
    </Box>
  )
}
