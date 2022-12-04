import axios from "axios";

interface GetCategoriesResponse {
  categories: Category[];
}

export async function getCategories() {
  const { data } = await axios.get<GetCategoriesResponse>(`/api/categories`)
  return data.categories;
}
