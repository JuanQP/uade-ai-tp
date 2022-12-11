import { OrderList } from "@/features/Orders/OrderList";
import * as orderAPI from "@/services/orderAPI";
import { Title } from "@mantine/core";
import { useEffect, useState } from "react";

export function Orders() {

  const [orders, setOrders] = useState<Array<Order>>([])

  async function fetchData() {
    const orders = await orderAPI.getOrders()
    setOrders(orders)
  }

  useEffect(() => {
    fetchData()
  }, [])

  async function handleUpdateOrder(order: Order, newStatus: Order["status"]) {
    await orderAPI.updateStatus({
      ids: [order._id],
      status: newStatus,
    })
    fetchData()
  }

  return (
    <>
      <Title>Compras</Title>
      <OrderList showUpdate orders={orders} onUpdateOrder={handleUpdateOrder} />
    </>
  )
}
