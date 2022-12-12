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
  _id: string;
  description: string;
  imageSrc: string;
}

interface Brand extends Category {}

interface CartProduct {
  _id?: string;
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

interface Payment {
  cardName: string;
  cardNumber: string;
  expDate: string;
  cvv: string;
}

interface OrderPayment extends Payment, OrderAddress { }

interface OrderRequest {
  user: OrderUser;
  address: OrderAddress;
  payment: OrderPayment;
  products: Array<CartProduct>;
}

interface Order {
  buyOrder: OrderRequest;
  _id: string;
  quantity: number;
  orderDate: string;
  deliveryDate: string;
  total: number;
  status: "Pendiente" | "Finalizado";
}

type LoginCredentials = {
  email: string;
  password: string;
}

interface User {
  _id: string;
  address: OrderAddress;
  payment: Payment;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isAdmin: boolean;
  avatar: string;
}
