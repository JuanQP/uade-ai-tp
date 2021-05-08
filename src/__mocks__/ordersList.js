import { v4 as uuid } from 'uuid';

const ordersList = [
  {
    id: uuid(),
    cod: 1000,
    buyOrder: {
      user: {
        firstName: 'Juan Ignacio',
        lastName: 'Quinteros Parada',
        email: 'juanquinteros@uade.edu.ar',
      },
      address: {
        address1: 'Falsa 123',
        state: 'CABA',
        city: 'CABA',
        zip: '7777',
        saveAddress: true,
      },
      payment: {
        cardName: 'Juan Ignacio Quinteros Parada',
        cardNumber: '1234 5678 9102 3456',
        expDate: '10/31',
        CVV: '999',
        address1: 'Falsa 123',
        state: 'CABA',
        city: 'CABA',
        zip: '7777',
      },
      products: [
        {
          product: {
            id: uuid(),
            img: '/static/images/products/product_2.png',
            producto: 'Mouse',
            marca: 'Genius',
            modelo: 'DX-125',
            conect: 'USB',
            peso: 'Aprox. 85g',
            precio: 700,
          },
          quantity: 2
        }
      ]
    },
    cantidad: 2,
    fechacompra: '04/04/2021',
    fechaentrega: '06/04/2021',
    total: 1400
  },
  {
    id: uuid(),
    cod: 1001,
    buyOrder: {
      user: {
        firstName: 'Martín',
        lastName: 'Fiordilino',
        email: 'mfiordilino@uade.edu.ar',
      },
      address: {
        address1: 'Evergreen 123',
        state: 'Masachusets',
        city: 'Springfield',
        zip: '1999',
        saveAddress: true,
      },
      payment: {
        cardName: 'Cliente Stonks',
        cardNumber: '1234 5678 9102 3456',
        expDate: '04/24',
        CVV: '999',
        address1: 'Evergreen 123',
        state: 'Masachusets',
        city: 'Springfield',
        zip: '1999',
      },
      products: [
        {
          product: {
            id: uuid(),
            img: '/static/images/products/product_3.png',
            producto: 'Teclado',
            marca: 'Genius',
            modelo: 'KB-116',
            conect: 'USB',
            peso: 'Aprox. 488g',
            precio: 350
          },
          quantity: 5,
        },
        {
          product: {
            id: uuid(),
            img: '/static/images/products/product_4.png',
            producto: 'Teclado',
            marca: 'Genius',
            modelo: 'KB-118',
            conect: 'USB',
            peso: 'Aprox. 467g',
            precio: 400
          },
          quantity: 2,
        },
      ]
    },
    cantidad: 7,
    fechacompra: '08/04/2021',
    fechaentrega: '10/04/2021',
    total: 2550
  },

];
export default ordersList;
