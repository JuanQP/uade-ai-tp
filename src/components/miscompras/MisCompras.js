import { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  CardHeader,
  Chip,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import axios from 'axios';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

function OrdersRow (props){
  const { order } = props;
  const [open, setOpen] = useState(false);

  return (
     <>
    <TableRow hover>
      <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      <TableCell>
        {order._id}
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
    <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Detalle de la compra
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Producto</TableCell>
                    <TableCell align="left">Marca</TableCell>
                    <TableCell align="left">Modelo</TableCell>
                    <TableCell align="left">Cantidad</TableCell>
                    <TableCell align="left">Precio Unitario</TableCell>
                    <TableCell align="left">Precio Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {order.buyOrder.products.map((producto) => (
                    <TableRow key={producto._id}>
                      <TableCell component="th" scope="row">
                        {producto.product.nombre}
                      </TableCell>
                      <TableCell>{producto.product.marca}</TableCell>
                      <TableCell align="left">{producto.product.modelo}</TableCell>
                      <TableCell align="left">{producto.quantity}</TableCell>
                      <TableCell align="left">${producto.product.precio}</TableCell>
                      <TableCell align="left">${producto.product.precio*producto.quantity}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
    )
}

const AdminOrders= ({ ...rest }) => {
  const [limit] = useState(10);
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    refreshPage(page);
  }, [page]);

  function handlePageChange(value) {
    setPage(value);
  }

  function refreshPage(newPage) {
    axios.get('http://localhost:4000/users/orders/', {params: {page: newPage+1}})
    .then((res) => {
      setOrders(res.data.data.docs);
      setCount(res.data.data.total);
    });
  }

  return (
    <>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
    <Container maxWidth="lg">
        <Card>
          <CardHeader
            title="Mis Compras"
            subheader="Acá podés ver todas las compras que realizastes"
          />
           </Card>
          </Container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          mb: 3,
        }}
      >
      </Box>
      <Card {...rest}>
        <PerfectScrollbar>
          <Box sx={{ minWidth: 1050 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                  </TableCell>
                  <TableCell>
                    ID de la Compra
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
                    Estado del Envío
                  </TableCell>
                  <TableCell>
                    Pagado
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.slice(0, limit).map((order) => (
                  <OrdersRow key={order._id} order={order}/>
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
      </Card>
      </Box>
    </>
  );
};

export default AdminOrders;
