import axios from "axios";

interface OrderResponse {
  status: number;
  data: Order;
  message: string;
}

interface OrdersResponse {
  status: number;
  data: {
    docs: Array<Order>;
    total: number;
    limit: number;
    page: number;
    pages: number;
  };
  message: string;
}

type OrderStatusUpdateRequest = {
  ids: Array<string>;
  status: Order["status"];
}

export async function createOrder(order: OrderRequest) {
  await axios.post(`/api/orders`, order)
}

export async function getOrder(id: string) {
  const { data } = await axios.get<OrderResponse>(`/api/orders/detail/${id}`)
  return data.data
}

export async function getOrders() {
  const { data } = await axios.get<OrdersResponse>(`/api/orders/`)
  return data.data.docs
}

export async function updateStatus(order: OrderStatusUpdateRequest) {
  await axios.post(`/api/orders/update-status`, order)
}
