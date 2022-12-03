import { Box, Image } from "@mantine/core";
import { Link } from "react-router-dom";

const imageStyle: React.CSSProperties = {
  borderColor: 'gray',
  borderWidth: 1,
  borderStyle: 'solid',
}

interface Props {
  brand: {
    image: string
    href: string
  }
}

export function BrandImage ({ brand }: Props) {
  return (
    <Link to={brand.href}>
      <Box>
        <Image
          withPlaceholder
          height={180}
          src={brand.image}
          imageProps={{ style: imageStyle }}
        />
      </Box>
    </Link>
  )
}
