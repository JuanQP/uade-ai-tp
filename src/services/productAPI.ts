import axios from "axios";

interface ProductResponse {
  status: number;
  data: Product;
  message: string;
}

interface ProductsResponse {
  status: number;
  data: {
    docs: Product[];
  };
  message: string;
}

export interface ProductQuery {
  brand: string[] | undefined;
  category: string[] | undefined;
  pmin: number | undefined;
  pmax: number | undefined;
  search: string | null;
}

export async function getProducts(query: ProductQuery) {
  const { search } = query;
  const { data } = await axios.get<ProductsResponse>(`/api/products/`, {
    params: search ? { search } : query,
  })
  return data.data.docs;
}

export async function getProduct(id: string) {
  const { data } = await axios.get<ProductResponse>(`/api/products/detail/${id}`)
  return data.data;
}
