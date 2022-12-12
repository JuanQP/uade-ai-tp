import * as brandAPI from "@/services/brandAPI";
import { useEffect, useState } from "react";

export function useBrands() {
  const [brands, setBrands] = useState<Brand[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const brands = await brandAPI.getBrands()
        setBrands(brands)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return { brands }
}
