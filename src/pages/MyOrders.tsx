import { OrderList } from "@/features/Orders/OrderList";
import * as userAPI from "@/services/userAPI";
import { Title } from "@mantine/core";
import { useEffect, useState } from "react";

export function MyOrders() {

  const [orders, setOrders] = useState<Array<Order>>([])

  useEffect(() => {
    const fetchData = async () => {
      const userOrders = await userAPI.getOrders()
      setOrders(userOrders)
    }
    fetchData()
  }, [])

  return (
    <>
      <Title>Mis compras</Title>
      <OrderList orders={orders} />
    </>
  )
}
