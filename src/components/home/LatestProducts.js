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
import products from 'src/__mocks__/ABMlist';
import { Link as RouterLink } from 'react-router-dom';

const LatestProducts = (props) => (
  <Card {...props}>
    <CardHeader
      title="Disfrute de los últimos productos"
    />
    <Divider />
    <List>
      {products.slice(0, 4).map((product, i) => (
        <ListItem
          divider={i < products.length - 1}
          key={product.id}
        >
          <ListItemAvatar>
            <img
              alt={`${product.producto} ${product.marca} ${product.modelo}`}
              src={product.img}
              style={{
                height: 100,
                width: 140
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={`${product.producto} ${product.marca} ${product.modelo}`}
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
        component={RouterLink} to={'/app/products'}
      >
        Ver Catalogo completo
      </Button>
    </Box>
  </Card>
);

export default LatestProducts;
