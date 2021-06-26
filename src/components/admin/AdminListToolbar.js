import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import { Link as RouterLink } from 'react-router-dom';

const AdminListToolbar = ({onDeleteClick, ...props}) => {

  function handleDeleteClick() {
    onDeleteClick();
  }

  return (
    <Box {...props}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Button color="secondary" variant="contained" onClick={handleDeleteClick} sx={{ mx: 1 }}>
          Eliminar
        </Button>
        <Button
          color="primary"
          variant="contained"
          component={RouterLink} to={'/admin/add-product'}
        >
          Agregar Producto
        </Button>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Buscar Producto"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default AdminListToolbar;
