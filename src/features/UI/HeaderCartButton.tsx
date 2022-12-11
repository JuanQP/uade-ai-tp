import { useCart } from "@/hooks/useCart";
import { Indicator } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons";
import { Link } from "react-router-dom";
import { HeaderButton } from "./HeaderButton";

export function HeaderCartButton() {

  const { cart } = useCart()
  const productsCount = cart.reduce((total, product) => total + product.quantity, 0)

  return (
    <Indicator label={productsCount} dot={false} showZero={false} inline size={22} overflowCount={19}>
      <Link to="/cart">
        <HeaderButton Icon={IconShoppingCart} />
      </Link>
    </Indicator>
  )
}
