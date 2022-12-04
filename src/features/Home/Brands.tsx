import { Grid } from "@mantine/core";
import { BrandImage } from "./BrandImage";

interface Props {
  brands: Brand[]
}

export function Brands({ brands }: Props) {
  return (
    <Grid mt="md">
      {brands.map((brand, index) => (
        <Grid.Col key={index} xs={6} md={3}>
          <BrandImage brand={brand} />
        </Grid.Col>
      ))}
    </Grid>
  )
}
