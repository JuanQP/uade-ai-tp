import { useBrands } from "@/hooks/useBrands";
import { useCategories } from "@/hooks/useCategories";
import { Brands, Categories, Welcome } from "@features/Home";
import { Box, Button, Center, Container } from "@mantine/core";
import { Link } from "react-router-dom";

export function Home() {

  const { categories } = useCategories()
  const { brands } = useBrands()

  return (
    <Box sx={{
      minHeight: 300,
      width: '100%',
      backgroundImage: "url(/wave-haikei.svg)",
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top',
    }}>
      <Welcome />
      <Container size="xl" p="sm">
        <Categories categories={categories} />
        <Brands brands={brands} />
        <Center>
          <Button variant="subtle" component={Link} to="/product-search" size="xl" color="teal" my="xl">
            Ver todos los productos
          </Button>
        </Center>
      </Container>
    </Box>
  )
}
