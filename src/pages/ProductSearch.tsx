import { Grid, Text } from "@mantine/core";
import { useSearchParams } from "react-router-dom";

export function ProductSearch() {

  const [params] = useSearchParams()

  return (
    <Grid>
      <Grid.Col md={4}>
        Filtros
      </Grid.Col>
      <Grid.Col md={8}>
        <Text>Productos</Text>
        <Text>Categoría {params.get('category')}</Text>
        <Text>Marca {params.get('brand')}</Text>
      </Grid.Col>
    </Grid>
  )
}
