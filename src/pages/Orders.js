import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import AdminOrders from 'src/components/admin/AdminOrders';
import {useEffect, useState} from 'react';
import axios from 'axios';

const Orders = ({...props}) => {

  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:4000/orders/', {params: {page: page}})
    .then((res) => {
      setOrders(res.data.data.docs);
      setCount(res.data.data.total);
      // setWaitingServer(false);
    });
  }, [page]);

  function handlePageChange(value) {
    setPage(value);
  }

  return (
    <>
      <Helmet>
        <title>FQ Computer | Listado de Pedidos</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <Box sx={{ pt: 3 }}>
            <AdminOrders orders={orders} page={page} count={count} onPageChange={handlePageChange} />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Orders;
