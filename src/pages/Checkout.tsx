import { AddressStep } from "@/features/Checkout/AddressStep";
import { ClientInfoStep } from "@/features/Checkout/ClientInfoStep";
import { FinishedOrderStep } from "@/features/Checkout/FinishedOrderStep";
import { PaymentStep } from "@/features/Checkout/PaymentStep";
import { ReviewStep } from "@/features/Checkout/ReviewStep";
import { useCart } from "@/hooks/useCart";
import * as orderAPI from "@/services/orderAPI";
import { Paper, Stepper } from "@mantine/core";
import { IconCreditCard, IconListCheck, IconTruckDelivery, IconUser } from "@tabler/icons";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export function Checkout() {

  const { cart, update: setCart } = useCart()
  const [step, setStep] = useState(0);
  const [orderUser, setOrderUser] = useState<OrderUser>({
    firstName: '',
    lastName: '',
    email: '',
  })
  const [orderAddress, setOrderAddress] = useState<OrderAddress>({
    address1: '',
    city: '',
    province: '',
    zip: '',
  })
  const [orderPayment, setOrderPayment] = useState<OrderPayment>({
    address1: '',
    city: '',
    province: '',
    zip: '',
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
  })
  const order = {
    user: orderUser,
    address: orderAddress,
    payment: orderPayment,
    products: cart,
  }

  if(cart.length === 0 && step !== 4) {
    return <Navigate to="/" />
  }

  function handleStepBack() {
    if(step === 0) return

    setStep(previous => previous - 1)
  }

  function handleOrderUserSubmit(newValues: OrderUser) {
    setOrderUser(newValues)
    handleNextStep()
  }

  function handleOrderAddressSubmit(newValues: OrderAddress) {
    setOrderAddress(newValues)
    setOrderPayment({
      ...orderPayment,
      ...newValues,
      cardName: `${orderUser.firstName} ${orderUser.lastName}`,
    })
    handleNextStep()
  }

  function handleOrderPaymentSubmit(newValues: OrderPayment, useSameAddress: boolean, useSameName: boolean) {
    setOrderPayment(newValues)
    handleNextStep()
  }

  async function handleSubmitOrder() {
    try {
      await orderAPI.createOrder(order)
      handleNextStep()
      setCart([])
    } catch (error) {
      console.error(error)
    }
  }

  function handleNextStep() {
    setStep(previous => previous + 1)
  }

  return (
    <Paper shadow="xs" withBorder p="xl">
      <Stepper color={step === 4 ? 'green' : 'blue'} active={step} breakpoint="sm">
        <Stepper.Step icon={<IconUser />} label="Cliente" description="Como nos comunicamos con vos">
          <ClientInfoStep
            defaultValues={orderUser}
            onStepBack={handleStepBack}
            onNextStep={handleOrderUserSubmit}
          />
        </Stepper.Step>
        <Stepper.Step icon={<IconTruckDelivery />} label="Dirección" description="Donde enviamos los productos">
          <AddressStep
            defaultValues={orderAddress}
            onStepBack={handleStepBack}
            onNextStep={handleOrderAddressSubmit}
          />
        </Stepper.Step>
        <Stepper.Step icon={<IconCreditCard />} label="Pago" description="¿Cómo vas a abonar?">
          <PaymentStep
            defaultValues={orderPayment}
            onStepBack={handleStepBack}
            onNextStep={handleOrderPaymentSubmit}
          />
        </Stepper.Step>
        <Stepper.Step icon={<IconListCheck />} label="Review" description="Verificá que esté todo correcto">
          <ReviewStep order={order} onSubmitOrder={handleSubmitOrder} />
        </Stepper.Step>
        <Stepper.Completed>
          <FinishedOrderStep />
        </Stepper.Completed>
      </Stepper>
    </Paper>
  )
}
