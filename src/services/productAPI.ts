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
  brand?: string[];
  category?: string[];
  pmin?: number;
  pmax?: number;
  search?: string | null;
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

export async function createProduct(product: Omit<Product, "_id">) {
  const { data } = await axios.post<ProductResponse>(`/api/products/`, product)
  return data.data;
}

export async function updateProduct(product: Product) {
  const { data } = await axios.put<ProductResponse>(`/api/products/`, product)
  return data.data;
}

export async function deleteProduct(ids: string[]) {
  const { data } = await axios.delete<Omit<ProductResponse, "data">>(`/api/products/`, {data: { ids }})
  return data.message;
}
