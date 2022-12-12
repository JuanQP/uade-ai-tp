import * as productAPI from '@/services/productAPI';
import { useEffect, useState } from "react";

export function useProduct(id: string) {

  const [product, setProduct] = useState<Product>()
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = await productAPI.getProduct(id)
        setProduct(product)
        setHasError(false)
      } catch (error) {
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  if(!isLoading && !product) {
    setHasError(true)
    throw new Error("No se pudo obtener el producto")
  }

  return { product, isLoading, hasError }
}
