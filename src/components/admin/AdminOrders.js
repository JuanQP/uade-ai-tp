import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Alert,
  Box,
  Button,
  Card,
  Checkbox,
  Chip,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import axios from 'axios';

const AdminOrders= ({ ...rest }) => {
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [limit] = useState(10);
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [serverMessage, setServerMessage] = useState('');

  useEffect(() => {
    refreshPage(page);
  }, [page]);

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedOrders.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedOrders, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedOrders.slice(1));
    } else if (selectedIndex === selectedOrders.length - 1) {
      newSelected = newSelected.concat(selectedOrders.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedOrders.slice(0, selectedIndex),
        selectedOrders.slice(selectedIndex + 1)
      );
    }

    setSelectedOrders(newSelected);
  };

  function handlePageChange(value) {
    setPage(value);
  }

  const handleSelectAll = (event) => {
    let newSelected;

    if (event.target.checked) {
      newSelected = orders.map((producto) => producto._id);
    } else {
      newSelected = [];
    }

    setSelectedOrders(newSelected);
  };

  function handleClose() {
    setOpen(false);
  }

  function refreshPage(newPage) {
    axios.get('http://localhost:4000/orders/', {params: {page: newPage+1}})
    .then((res) => {
      setOrders(res.data.data.docs);
      setCount(res.data.data.total);
    });
  }

  function handleEnviados() {
    axios.post('http://localhost:4000/orders/update-status', {ids: selectedOrders, estado: 'Enviado'})
    .then((res) => {
      refreshPage(page);
      setSelectedOrders([]);
      setServerMessage(res.data.message);
      setOpen(true);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handlePendientes() {
    axios.post('http://localhost:4000/orders/update-status', {ids: selectedOrders, estado: 'Pendiente'})
    .then((res) => {
      refreshPage(page);
      setSelectedOrders([]);
      setServerMessage(res.data.message);
      setOpen(true);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          mb: 1,
        }}
      >
        <Button variant="contained" color="primary" onClick={handleEnviados} sx={{ mx: 1 }}>
          Marcar como enviados
        </Button>
        <Button variant="contained" color="primary" onClick={handlePendientes} sx={{ mx: 1 }}>
          Marcar como pendientes
        </Button>
      </Box>
      <Card {...rest}>
        <PerfectScrollbar>
          <Box sx={{ minWidth: 1050 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedOrders.length === orders.length}
                      color="primary"
                      indeterminate={
                        selectedOrders.length > 0
                        && selectedOrders.length < orders.length
                      }
                      onChange={handleSelectAll}
                    />
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
                    Productos
                  </TableCell>
                  <TableCell>
                    Fecha de Compra
                  </TableCell>
                  <TableCell>
                    Fecha de Entrega
                  </TableCell>
                  <TableCell>
                    Estado
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
                    key={order._id}
                    selected={selectedOrders.indexOf(order._id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedOrders.indexOf(order._id) !== -1}
                        onChange={(event) => handleSelectOne(event, order._id)}
                        value="true"
                      />
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
                      <Chip label={order.estado} color={order.estado === 'Enviado' ? 'primary' : 'default'} />
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
          page={page}
          count={count}
        />
        <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'center'}} open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert variant="filled" onClose={handleClose} severity="success">
            {serverMessage}
          </Alert>
        </Snackbar>
      </Card>
    </>
  );
};

AdminOrders.propTypes = {
  ordersList: PropTypes.array.isRequired
};

export default AdminOrders;
