import { Anchor, Image, Stack } from "@mantine/core";
import { Link } from "react-router-dom";

const imageStyle: React.CSSProperties = {
  borderRadius: '50%',
  borderColor: 'gray',
  borderWidth: 1,
  borderStyle: 'solid',
}

interface Props {
  category: Category
}

export function CategoryImage ({ category }: Props) {
  return (
    <Stack align="center">
      <Link to={`/product-search?category=${category.description}`}>
        <Image
          withPlaceholder
          height={180}
          width={180}
          src={category.imageSrc}
          imageProps={{ style: imageStyle }}
        />
      </Link>
      <Anchor component={Link} to={`/product-search?category=${category.description}`} variant="text">
        {category.description}
      </Anchor>
    </Stack>
  )
}
