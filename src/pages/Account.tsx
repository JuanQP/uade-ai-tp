import { AddressInfo, AddressInfoSection } from "@/features/Account/AddressInfoSection";
import { PaymentInfoSection } from "@/features/Account/PaymentInfoSection";
import { UserInfoSection } from "@/features/Account/UserInfoSection";
import * as userAPI from "@/services/userAPI";
import { Box, Button, Container, Divider, Loader, Title } from "@mantine/core";
import { IconListCheck, IconLogout } from "@tabler/icons";
import { useEffect, useState } from "react";
import { useSignOut } from "react-auth-kit";
import { Link, Navigate, useNavigate } from "react-router-dom";

export function Account() {

  const logOut = useSignOut()
  const navigate = useNavigate()
  const [userData, setUserData] = useState<User>()
  const [fetching, setFetching] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await userAPI.currentUser()
        setUserData(data)
      } finally {
        setFetching(false)
      }
    }
    fetchData()
  }, [])

  function handleLogOut() {
    logOut()
    navigate('/')
  }

  async function handleAddressInfoSubmit(address: AddressInfo) {
    await userAPI.updateUser({ address })
  }

  async function handlePaymentInfoSubmit(payment: Payment) {
    await userAPI.updateUser({ payment })
  }

  if(fetching) {
    return (
      <Container>
        <Loader />
      </Container>
    )
  }

  if(!userData) {
    return <Navigate to="/" />
  }

  const { address, payment } = userData

  return (
    <>
      <Title>Mi cuenta</Title>
      <Box display="flex">
        <Button  ml="auto" variant="subtle" component={Link} to="/my-orders" leftIcon={<IconListCheck />}>
          Mis compras
        </Button>
        <Button variant="subtle" color="red" leftIcon={<IconLogout />} onClick={handleLogOut}>
          Salir
        </Button>
      </Box>
      <Divider my="sm"/>
      <UserInfoSection initialValues={userData} />

      <Divider my="sm"/>
      <AddressInfoSection initialValues={address} />

      <Divider my="sm"/>
      <PaymentInfoSection initialValues={payment} />
    </>
  )
}
