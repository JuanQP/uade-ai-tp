import { v4 as uuid } from 'uuid';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const products = [
  {
    id: uuid(),
    name: 'Mouse Genius DX-110',
    imageUrl: '/static/images/products/product_1.png',
  },
  {
    id: uuid(),
    name: 'Mouse Genius DX-125',
    imageUrl: '/static/images/products/product_2.png',
  },
  {
    id: uuid(),
    name: 'Teclado Genius KB-116',
    imageUrl: '/static/images/products/product_3.png',
  },
  {
    id: uuid(),
    name: 'Teclado Genius KB-118',
    imageUrl: '/static/images/products/product_4.png',
  },
  {
    id: uuid(),
    name: 'Parlante Genius SW-21-370',
    imageUrl: '/static/images/products/product_5.png',
  },
  {
    id: uuid(),
    name: 'Parlante Genius SW-21-375',
    imageUrl: '/static/images/products/product_6.png',
  }
];

const LatestProducts = (props) => (
  <Card {...props}>
    <CardHeader
      title="Disfrute de los últimos productos"
    />
    <Divider />
    <List>
      {products.map((product, i) => (
        <ListItem
          divider={i < products.length - 1}
          key={product.id}
        >
          <ListItemAvatar>
            <img
              alt={product.name}
              src={product.imageUrl}
              style={{
                height: 100,
                width: 140
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
          />
        </ListItem>
      ))}
    </List>
    <Divider />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        Ver Catalogo completo
      </Button>
    </Box>
  </Card>
);

export default LatestProducts;
