import axios from "axios";

export async function createOrder(order: Order) {
  await axios.post(`/api/orders`, order)
}
