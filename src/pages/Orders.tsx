import { OrderList } from "@/features/Orders/OrderList";
import * as orderAPI from "@/services/orderAPI";
import { Title } from "@mantine/core";
import { useEffect, useState } from "react";

export function Orders() {

  const [orders, setOrders] = useState<Array<Order>>([])

  useEffect(() => {
    const fetchData = async () => {
      const orders = await orderAPI.getOrders()
      setOrders(orders)
    }
    fetchData()
  }, [])

  return (
    <>
      <Title>Compras</Title>
      <OrderList orders={orders} />
    </>
  )
}
