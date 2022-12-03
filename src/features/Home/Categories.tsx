import { Grid } from "@mantine/core";
import { CategoryImage } from "./CategoryImage";

const CATEGORIES = [
  { label: 'Gaming Desktops', image: '/categories/gaming-desktops-category.webp', href: '#' },
  { label: 'Gaming Laptops', image: '/categories/gaming-laptops-category.webp', href: '#' },
  { label: 'Gaming Monitors', image: '/categories/gaming-monitors-category.webp', href: '#' },
  { label: 'PC Components', image: '/categories/pc-components-category.webp', href: '#' },
  { label: 'Keyboards', image: '/categories/keyboards-category.webp', href: '#' },
  { label: 'PC Headsets', image: '/categories/pc-headsets-category.webp', href: '#' },
  { label: 'Mice', image: '/categories/mice-category.webp', href: '#' },
  { label: 'Streaming', image: '/categories/streaming-category.webp', href: '#' },
  { label: 'Joysticks', image: '/categories/joysticks-category.webp', href: '#' },
  { label: 'PC Games', image: '/categories/pc-games-category.webp', href: '#' },
]

export function Categories() {
  return (
    <Grid mt="md">
      {CATEGORIES.map(category => (
        <Grid.Col key={category.label} xs={6} md={2.4}>
          <CategoryImage category={category} />
        </Grid.Col>
      ))}
    </Grid>
  )
}
