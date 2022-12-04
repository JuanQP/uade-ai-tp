import { Card, Image, Text } from "@mantine/core";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  return (
    <Card shadow="xs" radius="md" withBorder component={Link} to={`/product/${product._id}`}>
      <Card.Section>
        <Image
          src={product.image}
          height={200}
          fit="contain"
        />
      </Card.Section>
      <Text span color="green.8" size="xl" fw="bold">
        ${product.price}{" "}
        <Text span color="dimmed" size="md" strikethrough fw="normal">
          ${(product.price * 1.1).toFixed(2)}
        </Text>
      </Text>
      <Text fw="bold">{product.name}</Text>
    </Card>
  )
}
