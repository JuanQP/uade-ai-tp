import axios from "axios";

interface ProductResponse {
  status: number;
  data: Product;
  message: string;
}

export async function getProduct(id: string) {
  const { data } = await axios.get<ProductResponse>(`/api/products/detail/${id}`)
  return data.data;
}
