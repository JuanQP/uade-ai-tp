import { addressSchema, paymentSchema } from "@/schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid, TextInput } from "@mantine/core";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface Props {
  defaultValues: OrderPayment;
  onNextStep: (userInfo: OrderPayment, useSameAddress: boolean, useSameName: boolean) => void;
  onStepBack: () => void;
}

const schema = addressSchema.merge(paymentSchema)

export function PaymentStep({ defaultValues, onNextStep, onStepBack }: Props) {

  const [useSameAddress, setUseSameAddress] = useState(true)
  const [useSameName, setUseSameName] = useState(true)

  const { register, formState: { isValid }, handleSubmit } = useForm<OrderPayment>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  function handleFormSubmit(values: OrderPayment) {
    onNextStep(values, useSameAddress, useSameName)
  }

  return (
    <Box component="form" onSubmit={handleSubmit(handleFormSubmit)}>
      <Grid>
        <Grid.Col xs={12} md={6}>
          <TextInput
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
            placeholder="1 - 9999"
            maxLength={8}
            {...register('zip')}
          />
        </Grid.Col>
        <Grid.Col xs={12} md={6}>
          <TextInput
            label="Nombre en la tarjeta"
            placeholder="John Doe"
            {...register('cardName')}
          />
        </Grid.Col>
        <Grid.Col xs={12} md={6}>
          <TextInput
            autoFocus
            label="Número de tarjeta"
            placeholder="1234 5678 9012 3456"
            maxLength={20}
            {...register('cardNumber')}
          />
        </Grid.Col>
        <Grid.Col xs={12} md={6}>
          <TextInput
            label="Fecha de expiración"
            placeholder="12/23"
            maxLength={5}
            {...register('expDate')}
          />
        </Grid.Col>
        <Grid.Col xs={12} md={6}>
          <TextInput
            label="CVV"
            placeholder="123"
            maxLength={3}
            {...register('cvv')}
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
