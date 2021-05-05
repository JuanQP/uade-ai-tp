import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description: 'Este mouse posee Tres botones (izquierda, derecha y central con desplazamiento) y es el último módelo sacado al mercado por Genius.',
    media: '/static/images/products/product_1.png',
    title: 'Mouse Genius DX-110',
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description: 'Este mouse posee Tres botones (izquierda, derecha y central con desplazamiento). Apto para el uso con cualquiera de las manos.',
    media: '/static/images/products/product_2.png',
    title: 'Mouse Genius DX-125',
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    description: 'Este teclado tiene teclas de bajo perfil lo que le permitiran escribir cómodamente, en silencio y con un toque receptivo.',
    media: '/static/images/products/product_3.png',
    title: 'Teclado Genius KB-116',
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Este teclado tiene teclas de bajo perfil permitiendo una escritura rápida y fluida, además ofrece resistencia ante los derrames',
    media: '/static/images/products/product_4.png',
    title: 'Teclado Genius KB-118',
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Este parlante tiene altavoces de madera lo que logra obtener un sonido más potente. Tiene una potencia de 8W.',
    media: '/static/images/products/product_5.png',
    title: 'Parlante Genius SW-21-370',
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Este parlante tiene altavoces de madera lo que logra obtener un sonido más potente. Tiene una potencia de 6W.',
    media: '/static/images/products/product_6.png',
    title: 'Parlante Genius SW-21-375',
  }

];
