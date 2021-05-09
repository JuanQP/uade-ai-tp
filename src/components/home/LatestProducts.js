import {
  Avatar,
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
import BrokenImageIcon from '@material-ui/icons/BrokenImage';
import { Link as RouterLink } from 'react-router-dom';

const LatestProducts = ({products, ...props}) => (
  <Card {...props}>
    <CardHeader
      title="Disfrute de los últimos productos"
    />
    <Divider />
    <List>
      {products.slice(-4).map((product, i) => (
        <ListItem
          divider={i < products.length - 1}
          key={product.id}
        >
          <ListItemAvatar>
            <Avatar
              variant="square"
              alt={`${product.producto} ${product.marca} ${product.modelo}`}
              src={product.img}
              style={{
                height: 100,
                width: 140
              }}
            >
              <BrokenImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`${product.producto} ${product.marca} ${product.modelo}`}
          />
        </ListItem>
      ))}
    </List>
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
