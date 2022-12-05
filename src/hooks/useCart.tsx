import { createContext, PropsWithChildren, useContext, useState } from "react";

interface ContextInterface {
  cart: CartProduct[];
  update: React.Dispatch<React.SetStateAction<CartProduct[]>>;
}

const CartContext = createContext<ContextInterface>({
  cart: [],
  update: () => {},
})

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<CartProduct[]>([])

  return (
    <CartContext.Provider value={{ cart, update: setCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const { cart, update } = useContext(CartContext)

  function addProduct(newProduct: CartProduct) {
    if(cart.find(product => product.product._id === newProduct.product._id)) {
      const newProducts = cart.filter(product => product.product._id !== newProduct.product._id)
      update([...newProducts, newProduct])
    } else {
      update([...cart, newProduct])
    }
  }

  function removeProduct(removedProduct: CartProduct) {
    const newProducts = cart.filter(product => product.product._id !== removedProduct.product._id)
    update(newProducts)
  }

  return { cart, addProduct, update, removeProduct }
}
