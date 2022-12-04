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
