import { Box, Image } from "@mantine/core";
import { Link } from "react-router-dom";

const imageStyle: React.CSSProperties = {
  borderColor: 'gray',
  borderWidth: 1,
  borderStyle: 'solid',
}

interface Props {
  brand: Brand
}

export function BrandImage ({ brand }: Props) {
  return (
    <Link to={`/product-search?brand=${brand.id}`}>
      <Box>
        <Image
          withPlaceholder
          height={180}
          src={brand.imageSrc}
          imageProps={{ style: imageStyle }}
        />
      </Box>
    </Link>
  )
}
