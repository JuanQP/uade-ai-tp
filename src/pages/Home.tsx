import * as brandAPI from "@/services/brandAPI";
import * as categoryAPI from "@/services/categoryAPI";
import { Brands, Categories, Welcome } from "@features/Home";
import { useEffect, useState } from "react";

export function Home() {

  const [categories, setCategories] = useState<Category[]>([])
  const [brands, setBrands] = useState<Brand[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = await categoryAPI.getCategories()
        const brands = await brandAPI.getBrands()
        setCategories(categories)
        setBrands(brands)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <Welcome />
      <Categories categories={categories} />
      <Brands brands={brands} />
    </>
  )
}
