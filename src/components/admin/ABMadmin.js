import { useState } from 'react';
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

const ABMadmin = ({ ABMlist, onInsertProduct, onUpdateProduct, onDeleteProduct, ...rest }) => {
  const [selectedABMlistIds, setSelectedABMlistIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedABMlistIds;

    if (event.target.checked) {
      newSelectedABMlistIds = ABMlist.map((ABMlist) => ABMlist.id);
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
                    checked={selectedABMlistIds.length === ABMlist.length}
                    color="primary"
                    indeterminate={
                      selectedABMlistIds.length > 0
                      && selectedABMlistIds.length < ABMlist.length
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
                  Fecha de ingreso
                </TableCell>
                <TableCell>
                  Editar
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ABMlist.slice(0, limit).map((ABMlist) => (
                <TableRow
                  hover
                  key={ABMlist.id}
                  selected={selectedABMlistIds.indexOf(ABMlist.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedABMlistIds.indexOf(ABMlist.id) !== -1}
                      onChange={(event) => handleSelectOne(event, ABMlist.id)}
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
                        src={ABMlist.img}
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
                        {ABMlist.producto}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {ABMlist.marca}
                  </TableCell>
                  <TableCell>
                    {ABMlist.modelo}
                  </TableCell>
                  <TableCell>
                    {ABMlist.conect}
                  </TableCell>
                  <TableCell>
                    {ABMlist.peso}
                  </TableCell>
                  <TableCell>
                    {ABMlist.stock}
                  </TableCell>
                  <TableCell>
                    ${ABMlist.precio}
                  </TableCell>
                  <TableCell>
                    {ABMlist.fechaIngreso ? ABMlist.fechaIngreso : 'Sin especificar'}
                  </TableCell>
                  <TableCell>
                    <IconButton component={RouterLink} to={`/app/change-product/${ABMlist.id}`} aria-label="edit">
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
        count={ABMlist.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
    </>
  );
};

ABMadmin.propTypes = {
  ABMlist: PropTypes.array.isRequired
};

export default ABMadmin;
