import { Grid } from "@mantine/core";
import { BrandImage } from "./BrandImage";

const BRANDS = [
  { image: '/brands/razer.webp', href: '#' },
  { image: '/brands/asus.webp', href: '#' },
  { image: '/brands/samsung.webp', href: '#' },
  { image: '/brands/logitech.webp', href: '#' },
  { image: '/brands/msi.webp', href: '#' },
  { image: '/brands/lenovo.webp', href: '#' },
  { image: '/brands/hyperx.webp', href: '#' },
  { image: '/brands/intel.webp', href: '#' },
]

export function Brands() {
  return (
    <Grid mt="md">
      {BRANDS.map((brand, index) => (
        <Grid.Col key={index} xs={6} md={3}>
          <BrandImage brand={brand} />
        </Grid.Col>
      ))}
    </Grid>
  )
}
