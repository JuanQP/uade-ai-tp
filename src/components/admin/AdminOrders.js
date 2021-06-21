import { useState } from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';

const AdminOrders= ({ orders, page, count, onPageChange, ...rest }) => {
  const [selectedOrdersListIds] = useState([]);
  const [limit] = useState(10);

  const handlePageChange = (event, newPage) => {
    onPageChange(newPage+1);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="none">
                </TableCell>
                <TableCell>
                  ID del Pedido
                </TableCell>
                <TableCell>
                  Nombre y Apellido
                </TableCell>
                <TableCell>
                  E-mail
                </TableCell>
                <TableCell>
                  Cantidad de Productos
                </TableCell>
                <TableCell>
                  Fecha de Compra
                </TableCell>
                <TableCell>
                  Fecha de Entrega
                </TableCell>
                <TableCell>
                  Total a Pagar
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.slice(0, limit).map((order) => (
                <TableRow
                  hover
                  key={order.id}
                  selected={selectedOrdersListIds.indexOf(order.id) !== -1}
                >
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {order._id}
                  </TableCell>
                  <TableCell>
                    {`${order.buyOrder.user.firstName} ${order.buyOrder.user.lastName}`}
                  </TableCell>
                  <TableCell>
                    {order.buyOrder.user.email}
                  </TableCell>
                  <TableCell>
                    {order.cantidad}
                  </TableCell>
                  <TableCell>
                    {order.fechacompra}
                  </TableCell>
                  <TableCell>
                    {order.fechaentrega}
                  </TableCell>
                  <TableCell>
                    ${order.total}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        onPageChange={handlePageChange}
        rowsPerPage={10}
        rowsPerPageOptions={[10]}
        page={page-1}
        count={count}
      />
    </Card>
  );
};

AdminOrders.propTypes = {
  ordersList: PropTypes.array.isRequired
};

export default AdminOrders;
