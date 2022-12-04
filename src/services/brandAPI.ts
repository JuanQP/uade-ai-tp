import axios from "axios";

interface GetBrandsReponse {
  brands: Brand[];
}

export async function getBrands() {
  const { data } = await axios.get<GetBrandsReponse>(`/api/brands`)
  return data.brands;
}
