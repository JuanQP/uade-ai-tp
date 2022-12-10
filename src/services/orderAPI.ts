import axios from "axios";

interface OrderResponse {
  status: number;
  data: Order;
  message: string;
}

export async function createOrder(order: OrderRequest) {
  await axios.post(`/api/orders`, order)
}

export async function getOrder(id: string) {
  const { data } = await axios.get<OrderResponse>(`/api/orders/detail/${id}`)
  return data.data
}
