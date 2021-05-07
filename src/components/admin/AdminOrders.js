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

const AdminOrders= ({ ordersList, ...rest }) => {
  const [selectedOrdersListIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
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
              {ordersList.slice(0, limit).map((ordersList) => (
                <TableRow
                  hover
                  key={ordersList.id}
                  selected={selectedOrdersListIds.indexOf(ordersList.id) !== -1}
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
                  {ordersList.cod}
                  </TableCell>
                  <TableCell>
                    {ordersList.nombreYapellido}
                  </TableCell>
                  <TableCell>
                    {ordersList.email}
                  </TableCell>
                  <TableCell>
                    {ordersList.cantidad}
                  </TableCell>
                  <TableCell>
                    {ordersList.fechacompra}
                  </TableCell>
                  <TableCell>
                    {ordersList.fechaentrega}
                  </TableCell>
                  <TableCell>
                    ${ordersList.total}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={ordersList.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

AdminOrders.propTypes = {
  ordersList: PropTypes.array.isRequired
};

export default AdminOrders;
