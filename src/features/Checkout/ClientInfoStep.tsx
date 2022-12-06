import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid, TextInput } from "@mantine/core";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface Props {
  defaultValues: OrderUser;
  onNextStep: (userInfo: OrderUser) => void;
  onStepBack: () => void;
}

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
})

export function ClientInfoStep({ defaultValues, onNextStep, onStepBack }: Props) {

  const { register, formState: { isValid }, handleSubmit } = useForm<OrderUser>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  return (
    <Box component="form" onSubmit={handleSubmit(onNextStep)}>
      <Grid>
        <Grid.Col xs={12} md={4}>
          <TextInput
            autoFocus
            label="Nombre"
            placeholder="John"
            {...register('firstName')}
          />
        </Grid.Col>
        <Grid.Col xs={12} md={4}>
          <TextInput
            label="Apellido"
            placeholder="Doe"
            {...register('lastName')}
          />
        </Grid.Col>
        <Grid.Col xs={12} md={4}>
          <TextInput
            label="E-Mail"
            placeholder="michael.faraday@nasa.com"
            {...register('email')}
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
