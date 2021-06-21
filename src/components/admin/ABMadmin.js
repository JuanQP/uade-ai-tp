import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';
import AdminListToolbar from 'src/components/admin/AdminListToolbar';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';
import EditIcon from '@material-ui/icons/Edit';
import * as utils from 'src/utils/utils';
import axios from 'axios';

const ABMadmin = ({ ABMlist, onInsertProduct, onUpdateProduct, onDeleteProduct, ...rest }) => {
  const [selectedABMlistIds, setSelectedABMlistIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/products/', {params: {page: page+1}})
    .then((res) => {
      setProductos(res.data.data.docs);
      setCount(res.data.data.total);
      // setWaitingServer(false);
    });
  }, [page]);

  const handleSelectAll = (event) => {
    let newSelectedABMlistIds;

    if (event.target.checked) {
      newSelectedABMlistIds = productos.map((producto) => producto._id);
    } else {
      newSelectedABMlistIds = [];
    }

    setSelectedABMlistIds(newSelectedABMlistIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedABMlistIds.indexOf(id);
    let newSelectedABMlistIds = [];

    if (selectedIndex === -1) {
      newSelectedABMlistIds = newSelectedABMlistIds.concat(selectedABMlistIds, id);
    } else if (selectedIndex === 0) {
      newSelectedABMlistIds = newSelectedABMlistIds.concat(selectedABMlistIds.slice(1));
    } else if (selectedIndex === selectedABMlistIds.length - 1) {
      newSelectedABMlistIds = newSelectedABMlistIds.concat(selectedABMlistIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedABMlistIds = newSelectedABMlistIds.concat(
        selectedABMlistIds.slice(0, selectedIndex),
        selectedABMlistIds.slice(selectedIndex + 1)
      );
    }

    setSelectedABMlistIds(newSelectedABMlistIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  function handleRemoveProduct() {
    onDeleteProduct(selectedABMlistIds);
  }

  return (
    <>
    <AdminListToolbar onDeleteClick={handleRemoveProduct} />
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedABMlistIds.length === productos.length}
                    color="primary"
                    indeterminate={
                      selectedABMlistIds.length > 0
                      && selectedABMlistIds.length < productos.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Producto
                </TableCell>
                <TableCell>
                  Marca
                </TableCell>
                <TableCell>
                  Modelo
                </TableCell>
                <TableCell>
                  Interfaz
                </TableCell>
                <TableCell>
                  Peso
                </TableCell>
                <TableCell>
                  Stock
                </TableCell>
                <TableCell>
                  Precio
                </TableCell>
                <TableCell>
                  Editar
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productos.slice(0, limit).map((producto) => (
                <TableRow
                  hover
                  key={producto._id}
                  selected={selectedABMlistIds.indexOf(producto._id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedABMlistIds.indexOf(producto._id) !== -1}
                      onChange={(event) => handleSelectOne(event, producto._id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={utils.productPath(producto.img)}
                        alt="Product"
                        variant="square"
                        sx={{
                          mr: 3,
                          height: 80,
                          width: 100
                        }}
                      >
                        <BrokenImageIcon />
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {producto.nombre}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {producto.marca}
                  </TableCell>
                  <TableCell>
                    {producto.modelo}
                  </TableCell>
                  <TableCell>
                    {producto.interfaz}
                  </TableCell>
                  <TableCell>
                    {producto.peso}
                  </TableCell>
                  <TableCell>
                    {producto.stock}
                  </TableCell>
                  <TableCell>
                    ${producto.precio}
                  </TableCell>
                  <TableCell>
                    <IconButton component={RouterLink} to={`/admin/change-product/${producto._id}`} aria-label="edit">
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={count}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={10}
        rowsPerPageOptions={[10]}
      />
    </Card>
    </>
  );
};

ABMadmin.propTypes = {
  ABMlist: PropTypes.array.isRequired
};

export default ABMadmin;
