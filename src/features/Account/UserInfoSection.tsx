import { userSchema } from "@/schemas/schemas";
import * as userAPI from "@/services/userAPI";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Box, Button, Stack, TextInput, Title } from "@mantine/core";
import { IconDeviceFloppy } from "@tabler/icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = userSchema.pick({ firstName: true, lastName: true })

export type UserInfo = z.infer<typeof schema>

interface Props {
  initialValues: User;
}

export function UserInfoSection({ initialValues }: Props) {

  const [saving, setSaving] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [error, setError] = useState(false)
  const { firstName, lastName } = initialValues
  const { register, handleSubmit } = useForm<UserInfo>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName,
      lastName,
    }
  })

  async function handleFormSubmit(values: UserInfo) {
    try {
      setShowAlert(false)
      setError(false)
      setSaving(true)
      await userAPI.updateUser(values)
    } catch (error) {
      setError(true)
    } finally {
      setShowAlert(true)
      setSaving(false)
    }
  }

  return (
    <>
      <Title order={2}>Cuenta</Title>
      <Alert
        mt="sm"
        sx={{ display: showAlert ? undefined : "none" }}
        title={error ? "Error" : "Información guardada"}
        color={error ? "red" : "teal"}
        withCloseButton
        onClose={() => setShowAlert(false)}
      >
        {error ? "Ocurrió un error" : "La información de tu cuenta se guardó correctamente"}
      </Alert>
      <Box component="form" onSubmit={handleSubmit(handleFormSubmit)}>
        <Stack>
          <TextInput
            label="Nombre"
            placeholder="Isaac"
            {...register('firstName')}
          />
          <TextInput
            label="Apellido"
            placeholder="Newton"
            {...register('lastName')}
          />
          <Button
            leftIcon={<IconDeviceFloppy />}
            color="teal"
            ml="auto"
            type="submit"
            loading={saving}
          >
            Guardar
          </Button>
        </Stack>
      </Box>
    </>
  )
}
