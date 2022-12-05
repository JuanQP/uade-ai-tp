import { ActionIcon, Anchor, Box, Divider, Grid, Group, Image, Text } from "@mantine/core";
import { IconTrash } from "@tabler/icons";
import React from "react";
import { Link } from "react-router-dom";
import { QuantityInput } from "./QuantityInput";

interface Props {
  cart: CartProduct[];
  onChange: (cart: CartProduct[]) => void;
  onDelete: (cart: CartProduct) => void;
}

export function CartItems({ cart, onChange, onDelete }: Props) {

  function quantityChange(changedProduct: CartProduct) {
    const newCart = [...cart]
    const productIndex = cart.findIndex(product => product.product._id === changedProduct.product._id)
    newCart[productIndex] = changedProduct

    onChange(newCart)
  }

  return (
    <Grid p="lg">
      {cart.map(product => (
        <React.Fragment key={product.product._id}>
          <Grid.Col xs={12} md={8}>
            <Group align="center">
              <ActionIcon color="red" onClick={() => onDelete(product)}>
                <IconTrash />
              </ActionIcon>
              <Image src={product.product.image} height={100} width={100} fit="contain"/>
              <Box display="flex" sx={{ flexDirection: 'column', justifyContent: 'space-evenly' }}>
                <Anchor variant="text" component={Link} to={`/product/${product.product._id}`}>
                  <Text size="xl">{product.product.name}</Text>
                </Anchor>
                <Text color="dimmed">{product.product.brand}</Text>
                <Text color="dimmed">{product.product.category}</Text>
              </Box>
            </Group>
          </Grid.Col>
          <Grid.Col xs={12} md={4}>
            <Box display="flex" sx={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
              <QuantityInput product={product} max={product.product.stock} onChange={quantityChange} />
              <Text size={24}>
                $ {(product.product.price * product.quantity).toFixed(2)}
              </Text>
            </Box>
          </Grid.Col>
          <Grid.Col xs={12}>
            <Divider my="lg" />
          </Grid.Col>
        </React.Fragment>
      ))}
    </Grid>
  )
}
