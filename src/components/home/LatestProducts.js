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
import * as utils from 'src/utils/utils';
import {useEffect, useState} from 'react';
import axios from 'axios';

const LatestProducts = ({products, ...props}) => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/products/latest')
    .then((res) => {
      setProductos(res.data.data);
    });
  }, [])

  return (
    <Card {...props}>
      <CardHeader
        title="Disfrute de los últimos productos"
      />
      <Divider />
      <List>
        {productos.map((product, i) => (
          <ListItem
            component={RouterLink}
            to={'/app/product/' + product._id}
            divider={i < productos.length - 1}
            key={product._id}
          >
            <ListItemAvatar>
              <Avatar
                variant="square"
                alt={product.nombre}
                src={utils.productPath(product.img)}
                style={{
                  height: 100,
                  width: 140
                }}
              >
                <BrokenImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={product.nombre}
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
}

export default LatestProducts;
