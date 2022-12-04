import { CheckboxFilter } from "@/features/ProductSearch/CheckboxFilter";
import { PriceFilter } from "@/features/ProductSearch/PriceFilter";
import { ProductsGrid } from "@/features/ProductSearch/ProductsGrid";
import * as brandAPI from "@/services/brandAPI";
import * as categoryAPI from "@/services/categoryAPI";
import * as productAPI from "@/services/productAPI";
import { Divider, Grid, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export function ProductSearch() {

  const [params] = useSearchParams()
  const [brands, setBrands] = useState<Brand[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [minPrice, setMinPrice] = useState<number | undefined>()
  const [maxPrice, setMaxPrice] = useState<number | undefined>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = await categoryAPI.getCategories()
        const brands = await brandAPI.getBrands()
        const brandQueryParam = params.get("brand")
        const categoryQueryParam = params.get("category")
        if(brandQueryParam) {
          setSelectedBrands([brandQueryParam])
        }
        if(categoryQueryParam) {
          setSelectedCategories([categoryQueryParam])
        }
        const products = await productAPI.getProducts({
          brand: brandQueryParam ? [brandQueryParam] : undefined,
          category: categoryQueryParam ? [categoryQueryParam] : undefined,
          pmin: undefined,
          pmax: undefined,
        })
        setCategories(categories)
        setBrands(brands)
        setProducts(products)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  async function filterProducts(newFilters: Partial<productAPI.ProductQuery>) {
    const products = await productAPI.getProducts({
      brand: selectedBrands,
      category: selectedCategories,
      pmin: minPrice,
      pmax: maxPrice,
      ...newFilters,
    })
    setProducts(products)
  }

  function handleBrandsChange(options: string[]) {
    setSelectedBrands(options)
    filterProducts({
      brand: options,
    })
  }

  function handleCategoriesChange(options: string[]) {
    setSelectedCategories(options)
    filterProducts({
      category: options,
    })
  }

  function handlePriceSubmit(minPrice: number | undefined, maxPrice: number | undefined) {
    setMinPrice(minPrice)
    setMaxPrice(maxPrice)
    filterProducts({
      pmin: minPrice,
      pmax: maxPrice,
    })
  }

  return (
    <Grid>
      <Grid.Col md={3}>
        <CheckboxFilter
          label="Marca"
          valueField="description"
          labelField="description"
          options={brands}
          value={selectedBrands}
          onChange={handleBrandsChange}
        />
        <Divider my="sm"/>
        <CheckboxFilter
          label="Categoría"
          valueField="description"
          labelField="description"
          options={categories}
          value={selectedCategories}
          onChange={handleCategoriesChange}
        />
        <Divider my="sm"/>
        <PriceFilter
          label="Precio"
          onSubmit={handlePriceSubmit}
        />
      </Grid.Col>
      <Grid.Col md={9}>
        <Text my="lg">{products.length} productos encontrados para esta búsqueda</Text>
        <ProductsGrid products={products} />
      </Grid.Col>
    </Grid>
  )
}
