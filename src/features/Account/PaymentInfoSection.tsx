import { paymentSchema } from "@/schemas/schemas";
import * as userAPI from "@/services/userAPI";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Box, Button, Stack, TextInput, Title } from "@mantine/core";
import { IconDeviceFloppy } from "@tabler/icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = paymentSchema

export type PaymentInfo = z.infer<typeof schema>

interface Props {
  initialValues: PaymentInfo;
}

export function PaymentInfoSection({ initialValues }: Props) {

  const [saving, setSaving] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [error, setError] = useState(false)
  const { register, handleSubmit } = useForm<PaymentInfo>({
    resolver: zodResolver(schema),
    defaultValues: initialValues,
  })

  async function handleFormSubmit(payment: PaymentInfo) {
    try {
      setShowAlert(false)
      setError(false)
      setSaving(true)
      await userAPI.updateUser({ payment })
    } catch (error) {
      setError(true)
    } finally {
      setShowAlert(true)
      setSaving(false)
    }
  }

  return (
    <>
      <Title order={2}>Pago</Title>
      <Alert
        mt="sm"
        sx={{ display: showAlert ? undefined : "none" }}
        title={error ? "Error" : "Información guardada"}
        color={error ? "red" : "teal"}
        withCloseButton
        onClose={() => setShowAlert(false)}
      >
        {error ? "Ocurrió un error" : "La información de pago se guardó correctamente"}
      </Alert>
      <Box component="form" onSubmit={handleSubmit(handleFormSubmit)}>
        <Stack>
          <TextInput
            label="Nombre en la tarjeta"
            placeholder="Isaac Newton"
            {...register('cardName')}
          />
          <TextInput
            label="Número en la tarjeta"
            placeholder="1234 5678 9012 3456"
            {...register('cardNumber')}
          />
          <TextInput
            label="Fecha de expiración"
            placeholder="12/23"
            {...register('expDate')}
          />
          <TextInput
            label="CVV"
            placeholder="123"
            {...register('cvv')}
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
