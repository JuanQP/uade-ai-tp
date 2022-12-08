import * as userAPI from "@/services/userAPI";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid, Paper, PasswordInput, TextInput, Title } from "@mantine/core";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(1),
  repeatPassword: z.string().min(1),
})
.refine(({ password, repeatPassword }) => password === repeatPassword, {
  message: "Passwords don't match",
  path: ['repeatPassword'],
})

type RegistrationUserInfo = z.infer<typeof schema>

export function Register() {

  const navigate = useNavigate()

  const { register, formState: { errors }, handleSubmit } = useForm<RegistrationUserInfo>({
    resolver: zodResolver(schema),
  })

  async function handleFormSubmit(values: RegistrationUserInfo) {
    const { repeatPassword, ...userInfo } = values
    await userAPI.register(userInfo)
    navigate('/register-ok')
  }

  return (
    <Paper
      withBorder
      shadow="md"
      p="xl"
      sx={{ width: '100%' }}
    >
      <Title>Crear cuenta</Title>
      <Box component="form" onSubmit={handleSubmit(handleFormSubmit)}>
        <Grid>
          <Grid.Col xs={12}>
            <TextInput
              autoFocus
              autoComplete="off"
              label="Nombre"
              placeholder="John"
              error={errors.firstName?.message}
              {...register('firstName')}
            />
          </Grid.Col>
          <Grid.Col xs={12}>
            <TextInput
              autoComplete="off"
              label="Apellido"
              placeholder="Doe"
              error={errors.lastName?.message}
              {...register('lastName')}
            />
          </Grid.Col>
          <Grid.Col xs={12}>
            <TextInput
              autoComplete="off"
              label="E-Mail"
              placeholder="michael.faraday@nasa.com"
              error={errors.email?.message}
              {...register('email')}
            />
          </Grid.Col>
          <Grid.Col xs={12}>
            <PasswordInput
              autoComplete="off"
              label="Password"
              placeholder="🔒"
              error={errors.password?.message}
              {...register('password')}
            />
          </Grid.Col>
          <Grid.Col xs={12}>
            <PasswordInput
              autoComplete="off"
              label="Repetir password"
              placeholder="🔒 x2"
              error={errors.repeatPassword?.message}
              {...register('repeatPassword')}
            />
          </Grid.Col>
          <Grid.Col xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                component={Link}
                to="/login"
                variant="subtle"
                color="teal"
              >
                Tengo cuenta
              </Button>
              <Button type="submit" color="teal">Registrarme</Button>
            </Box>
          </Grid.Col>
        </Grid>
      </Box>
    </Paper>
  )
}
