import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import AdminOrders from 'src/components/admin/AdminOrders';
import ordersList from 'src/__mocks__/ordersList';

const Orders = () => (
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
          <AdminOrders ordersList={ordersList} />
        </Box>
      </Container>
    </Box>
  </>
);

export default Orders;
