import { Anchor, Image, Stack } from "@mantine/core";
import { Link } from "react-router-dom";

const imageStyle: React.CSSProperties = {
  borderRadius: '50%',
  borderColor: 'gray',
  borderWidth: 1,
  borderStyle: 'solid',
}

interface Props {
  category: {
    label: string
    image: string
    href: string
  }
}

export function CategoryImage ({ category }: Props) {
  return (
    <Stack align="center">
      <Link to={category.href}>
        <Image
          withPlaceholder
          height={180}
          width={180}
          src={category.image}
          imageProps={{ style: imageStyle }}
        />
      </Link>
      <Anchor component={Link} to={category.href} color="dark" underline={false}>
        {category.label}
      </Anchor>
    </Stack>
  )
}
