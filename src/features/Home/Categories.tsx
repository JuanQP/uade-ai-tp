import { Grid } from "@mantine/core";
import { CategoryImage } from "./CategoryImage";

const CATEGORIES = [
  { label: 'Gaming Desktops', image: '/gaming-desktops-category.webp', href: '#' },
  { label: 'Gaming Laptops', image: '/gaming-laptops-category.webp', href: '#' },
  { label: 'Gaming Monitors', image: '/gaming-monitors-category.webp', href: '#' },
  { label: 'PC Components', image: '/pc-components-category.webp', href: '#' },
  { label: 'Keyboards', image: '/keyboards-category.webp', href: '#' },
  { label: 'PC Headsets', image: '/pc-headsets-category.webp', href: '#' },
  { label: 'Mice', image: '/mice-category.webp', href: '#' },
  { label: 'Streaming', image: '/streaming-category.webp', href: '#' },
  { label: 'Joysticks', image: '/joysticks-category.webp', href: '#' },
  { label: 'PC Games', image: '/pc-games-category.webp', href: '#' },
]

export function Categories() {
  return (
    <Grid mt={1} columns={12}>
      {CATEGORIES.map(category => (
        <Grid.Col key={category.label} xs={6} md={2.4}>
          <CategoryImage category={category} />
        </Grid.Col>
      ))}
    </Grid>
  )
}
