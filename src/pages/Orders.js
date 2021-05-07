import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import AdminOrders from 'src/components/admin/AdminOrders';

const Orders = ({ordersdb, ...props}) => (
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
          <AdminOrders ordersList={ordersdb} />
        </Box>
      </Container>
    </Box>
  </>
);

export default Orders;
