import { Grid } from "@mantine/core";
import { CategoryImage } from "./CategoryImage";

interface Props {
  categories: Category[];
}

export function Categories({ categories }: Props) {
  return (
    <Grid mt="md">
      {categories.map(category => (
        <Grid.Col key={category._id} xs={6} md={2.4}>
          <CategoryImage category={category} />
        </Grid.Col>
      ))}
    </Grid>
  )
}
