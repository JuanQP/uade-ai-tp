import { addressSchema } from "@/schemas/schemas";
import * as userAPI from "@/services/userAPI";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Box, Button, Stack, TextInput, Title } from "@mantine/core";
import { IconDeviceFloppy } from "@tabler/icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = addressSchema

export type AddressInfo = z.infer<typeof schema>

interface Props {
  initialValues: AddressInfo;
}

export function AddressInfoSection({ initialValues }: Props) {

  const [saving, setSaving] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [error, setError] = useState(false)
  const { register, handleSubmit } = useForm<AddressInfo>({
    resolver: zodResolver(schema),
    defaultValues: initialValues,
  })

  async function handleFormSubmit(address: AddressInfo) {
    try {
      setShowAlert(false)
      setError(false)
      setSaving(true)
      await userAPI.updateUser({ address })
    } catch (error) {
      setError(true)
    } finally {
      setShowAlert(true)
      setSaving(false)
    }
  }

  return (
    <>
      <Title order={2}>Envío</Title>
      <Alert
        mt="sm"
        sx={{ display: showAlert ? undefined : "none" }}
        title={error ? "Error" : "Información guardada"}
        color={error ? "red" : "teal"}
        withCloseButton
        onClose={() => setShowAlert(false)}
      >
        {error ? "Ocurrió un error" : "La información de envío se guardó correctamente"}
      </Alert>
      <Box component="form" onSubmit={handleSubmit(handleFormSubmit)}>
        <Stack>
          <TextInput
            label="Dirección"
            placeholder="False 123"
            {...register('address1')}
          />
          <TextInput
            label="Ciudad"
            placeholder="CABA"
            {...register('city')}
          />
          <TextInput
            label="Provincia"
            placeholder="CABA"
            {...register('province')}
          />
          <TextInput
            label="Código postal"
            placeholder="9999"
            {...register('zip')}
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
