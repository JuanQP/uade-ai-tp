import { ProductForm } from "@/features/Products/ProductForm";
import { useBrands } from "@/hooks/useBrands";
import { useCategories } from "@/hooks/useCategories";
import { useProduct } from "@/hooks/useProduct";
import * as productAPI from "@/services/productAPI";
import { Loader, Text, Title } from "@mantine/core";
import { useState } from "react";
import { useParams } from "react-router-dom";

export function UpdateProduct() {

  const { id } = useParams()
  if(!id) throw new Error("No se especificó el ID de producto")
  const { categories } = useCategories()
  const { brands } = useBrands()
  const { product, isLoading, hasError } = useProduct(id)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(product: Omit<Product, "_id">) {
    try {
      setSubmitting(true)
      if(!id) throw new Error("No se especificó el ID de producto")
      await productAPI.updateProduct({
        ...product,
        _id: id,
      })
    } catch (error) {
      console.error(error)
    } finally {
      setSubmitting(false)
    }
  }

  if(isLoading) return <Loader />
  if(hasError) return <Text color="red">Error cargando el producto</Text>

  return (
    <>
      <Title>Modificar producto</Title>
      <ProductForm
        loading={submitting}
        brands={brands}
        categories={categories}
        onSubmit={handleSubmit}
        initialValues={product}
      />
    </>
  )
}
