import { useBrands } from "@/hooks/useBrands";
import { useCategories } from "@/hooks/useCategories";
import { Brands, Categories, Welcome } from "@features/Home";

export function Home() {

  const { categories } = useCategories()
  const { brands } = useBrands()

  return (
    <>
      <Welcome />
      <Categories categories={categories} />
      <Brands brands={brands} />
    </>
  )
}
