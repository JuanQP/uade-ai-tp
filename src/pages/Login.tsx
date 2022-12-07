import * as userAPI from "@/services/userAPI";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Center, Container, Paper, PasswordInput, Stack, TextInput, Title } from "@mantine/core";
import { IconAt } from "@tabler/icons";
import { useAuthUser, useIsAuthenticated, useSignIn } from "react-auth-kit";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { z } from "zod";

const schema = z.object({
  email: z.string().min(1).email(),
  password: z.string().min(1),
})

export function Login() {

  const auth = useAuthUser()
  const signIn = useSignIn()
  const isAuthenticated = useIsAuthenticated()
  const navigate = useNavigate()
  const {handleSubmit, register, formState } = useForm<LoginCredentials>({
    resolver: zodResolver(schema),
  })

  async function handleFormSubmit(credentials: LoginCredentials) {
    try {
      const user = await userAPI.login(credentials)
      signIn({
        token: user.token,
        tokenType: 'Bearer',
        expiresIn: 1440,
        authState: {
          firstName: user.user.firstName,
          lastName: user.user.lastName,
          token: user.token,
        },
      })
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  if(isAuthenticated()) {
    const userData = auth()
    if(userData === null) throw new Error("Invalid user")

    return <Navigate to="/" />
  }

  return (
    <Box sx={{
      background: 'linear-gradient(45deg, #0575E6, #00F260)',
      height: '100vh',
      width: '100vw'
    }}>
      <Container size="sm" sx={{ height: '100%' }}>
        <Center sx={{ height: '100%' }}>
          <Paper
            withBorder
            shadow="md"
            p="xl"
            sx={{ width: '100%' }}
          >
            <Title>Ingresar</Title>
            <Box component="form" onSubmit={handleSubmit(handleFormSubmit)}>
              <Stack>
                <TextInput
                  autoFocus
                  label="E-Mail"
                  placeholder="you@somedomain.com"
                  icon={<IconAt size={14} />}
                  withAsterisk
                  {...register('email')}
                />
                <PasswordInput
                  label="Password"
                  placeholder="No se lo digas a nadie 🤫"
                  withAsterisk
                  {...register('password')}
                />
                <Button
                  disabled={!formState.isValid}
                  type="submit"
                >
                  Ingresar
                </Button>
              </Stack>
            </Box>
          </Paper>
        </Center>
      </Container>
    </Box>
  )
}
