import { ProductsTable } from "@/features/Admin/ProductsTable";
import * as productAPI from "@/services/productAPI";
import { Box, Button, Title } from "@mantine/core";
import { IconPlus } from "@tabler/icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function AdminProducts() {

  const [products, setProducts] = useState<Array<Product>>([])

  async function handleDelete(product: Product) {
    if(confirm(`¿Estás seguro de borrar ${product.name}?`)) {
      await productAPI.deleteProduct([product._id])
      fetchData()
    }
  }

  async function fetchData() {
    const products = await productAPI.getProducts({})
    setProducts(products)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Title>Productos</Title>
      <Box my="lg">
        <Button component={Link} to="/admin/new-product" color="green" leftIcon={<IconPlus />}>
          Nuevo producto
        </Button>
      </Box>
      <ProductsTable products={products} onDelete={handleDelete} />
    </>
  )
}
