import { StockStatus } from '@/features/Products';
import { useCart } from '@/hooks/useCart';
import { useProduct } from '@/hooks/useProduct';
import { Badge, Button, Divider, Grid, Group, Image, Loader, NativeSelect, Stack, Text, Title } from "@mantine/core";
import { IconBuildingStore, IconTruckDelivery } from '@tabler/icons';
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function Product() {

  const { id } = useParams()
  if(!id) throw new Error("No se especificó un ID de producto")

  const navigate = useNavigate()
  const { product, isLoading } = useProduct(id)
  const [quantity, setQuantity] = useState<number>(1)
  const { cart, addProduct } = useCart()
  const hasProductInCart = cart.find(product => product.product._id === id)


  function handleAddToCart() {
    if(!product) return
    addProduct({ product, quantity })
  }

  function handleBuyNow() {
    if(!product) return
    addProduct({ product, quantity })
    navigate('/cart')
  }

  if(isLoading || !product) return <Loader />

  // ["1", "2", "3", ...]
  const quantityOptions = Array(Math.min(product.stock, 10)).fill("0").map((_, i) => `${i+1}`)
  const hasStock = product.stock > 0

  return (
    <Grid mt="md">
      <Grid.Col xs={12} md={8}>
        <Image
          src={product.image}
          alt={product.name}
          height={400}
          fit="contain"
        />
      </Grid.Col>
      <Grid.Col xs={12} md={4}>
        <Title fw="normal">{product.name}</Title>
        <Group>
          <Badge variant="filled" color="teal">{product.brand}</Badge>
          <Badge variant="filled" color="blue">{product.category}</Badge>
        </Group>
        <Text size={40}>${product.price}</Text>
        <Divider my="md"/>
        <StockStatus
          Icon={IconBuildingStore}
          hasStock={hasStock}
          hasStockMessage="Lo pedís ahora y podés retirarlo inmediatamente 👌"
          message="para retirar"
        />
        <StockStatus
          Icon={IconTruckDelivery}
          hasStock={hasStock}
          hasStockMessage="Lo pedís ahora y en tres días lo tenés en tu casa"
          message="para envío inmediato"
        />
        <Stack>
          <NativeSelect
            label="Cantidad"
            description={`${product.stock} disponibles`}
            data={quantityOptions}
            value={quantity}
            disabled={!hasStock}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <Button disabled={!hasStock || !quantity} onClick={handleBuyNow}>
            Comprar ahora
          </Button>
          <Button variant="light" disabled={!hasStock || !quantity} onClick={handleAddToCart}>
            Agregar al carrito
          </Button>
          {!hasProductInCart ? null : (
            <Text color="dimmed">Ya tenés este producto en tu carrito 👌</Text>
          )}
        </Stack>
      </Grid.Col>
      <Grid.Col xs={12}>
        <Divider my="md" />
        <Title fw="normal" mb="md">Descripción</Title>
        <Text sx={{ whiteSpace: 'pre-line' }}>{product.description}</Text>
      </Grid.Col>
    </Grid>
  )
}
