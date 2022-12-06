interface Product {
  _id: string;
  brand: string;
  category: string;
  description: string;
  image: string;
  name: string;
  price: number;
  productModel: string;
  stock: number;
}

interface Category {
  id: string;
  description: string;
  imageSrc: string;
}

interface Brand extends Category {}

interface CartProduct {
  product: Product;
  quantity: number;
}

interface OrderUser {
  firstName: string;
  lastName: string;
  email: string;
}

interface OrderAddress {
  address1: string;
  province: string;
  city: string;
  zip: string;
}

interface OrderPayment extends OrderAddress {
  cardName: string;
  cardNumber: string;
  expDate: string;
  cvv: string;
}

interface Order {
  user: OrderUser;
  address: OrderAddress;
  payment: OrderPayment;
  products: Array<CartProduct>;
}
