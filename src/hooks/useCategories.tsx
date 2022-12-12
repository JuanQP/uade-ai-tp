import * as categoryAPI from "@/services/categoryAPI";
import { useEffect, useState } from "react";

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = await categoryAPI.getCategories()
        setCategories(categories)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return { categories }
}
