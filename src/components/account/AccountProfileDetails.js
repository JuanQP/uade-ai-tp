import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';

const AccountProfileDetails = ({onAccountDetailsSave, ...props}) => {
  const [values, setValues] = useState({
    firstName: props.user.firstName,
    lastName: props.user.lastName,
    email: props.user.email,
  });

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  function handleSaveButtonClick() {
    onAccountDetailsSave({
      firstName: values.firstName,
      lastName: values.lastName,
    });
  }

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="Puede modificar sus datos"
          title="Perfil"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Especifique un Nombre"
                label="Nombre"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Apellido"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                disabled
                label="E-mail"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={handleSaveButtonClick}
          >
            Guardar Cambios
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AccountProfileDetails;
