import { ProductForm } from "@/features/Products/ProductForm";
import { useBrands } from "@/hooks/useBrands";
import { useCategories } from "@/hooks/useCategories";
import * as productAPI from "@/services/productAPI";
import { Title } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function NewProduct() {

  const { categories } = useCategories()
  const { brands } = useBrands()
  const navigate = useNavigate()
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(product: Omit<Product, "_id">) {
    try {
      setSubmitting(true)
      await productAPI.createProduct(product)
      navigate('/admin/products')
    } catch (error) {
      console.error(error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Title>Nuevo producto</Title>
      <ProductForm
        loading={submitting}
        brands={brands}
        categories={categories}
        onSubmit={handleSubmit}
      />
    </>
  )
}
