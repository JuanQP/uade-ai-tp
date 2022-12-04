import { Grid } from "@mantine/core";
import { ProductCard } from "./ProductCard";

interface Props {
  products: Product[];
}

export function ProductsGrid({ products }: Props) {
  return (
    <Grid>
      {products.map(product => (
        <Grid.Col key={product._id} md={3}>
          <ProductCard product={product}/>
        </Grid.Col>
      ))}
    </Grid>
  )
}
