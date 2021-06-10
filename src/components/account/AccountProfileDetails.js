import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Container,
  Typography,
  TextField
} from '@material-ui/core';

const AccountProfileDetails = ({onAccountDetailsSave, ...props}) => {
  const [values, setValues] = useState({
    firstName: props.user.firstName,
    lastName: props.user.lastName,
    email: props.user.email,
    address: props.user.address.address1,
    city: props.user.address.city,
    province: props.user.address.province,
    zip: props.user.address.zip,
    cardName: props.user.payment.cardName,
    cardNumber: props.user.payment.cardNumber,
    expDate: props.user.payment.expDate,
    CVV:  props.user.payment.CVV,
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
      address1: values.address1,
      city: values.city,
      province: values.province,
      zip: values.zip,
      cardName: values.cardName,
      cardNumber: values.cardNumber,
      expDate: values.expDate,
      CVV: values.CVV,
    
    });
  }

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
       <Container maxWidth="lg">
            <Typography variant="h2" align="left" color="textPrimary" gutterBottom>
             Mis Datos
            </Typography>
          </Container>    
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pt: 2
            }}
          ></Box>
        <Container maxWidth="lg">
            <Typography variant="h4" align="left" color="textPrimary" gutterBottom>
            Datos Personales
            </Typography>
      <Card>
        <CardHeader
          subheader="Puede modificar sus datos personales"
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
     </Card>
     </Container>
     <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pt: 3
            }}
          ></Box>
     <Container maxWidth="lg">
            <Typography variant="h4" align="left" color="textPrimary" gutterBottom>
             Datos de Envio
            </Typography>
        <Card>
        <CardHeader
          subheader="Puede modificar sus datos de envio"
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
                label="Dirección"
                name="direccion"
                onChange={handleChange}
                required
                value={values.address}
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
                label="Ciudad"
                name="ciudad"
                onChange={handleChange}
                required
                value={values.city}
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
                label="Provincia"
                name="provincia"
                onChange={handleChange}
                required
                value={values.province}
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
                label="Código Postal"
                name="zip"
                onChange={handleChange}
                required
                value={values.zip}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        </Card>
        </Container>
        <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pt: 3
            }}
          ></Box>
        <Container maxWidth="lg">
            <Typography variant="h4" align="left" color="textPrimary" gutterBottom>
             Datos de Pago
            </Typography>
        <Card>
        <CardHeader
          subheader="Puede modificar sus datos de pago"
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
                label="Nombre de la tarjeta"
                name="cardName"
                onChange={handleChange}
                required
                value={values.cardName}
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
                label="Número de tarjeta"
                name="cardNumber"
                onChange={handleChange}
                required
                value={values.cardNumber}
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
                label="Fecha de Vencimiento"
                name="expDate"
                onChange={handleChange}
                required
                value={values.expDate}
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
                label="CVV"
                name="CVV"
                onChange={handleChange}
                required
                value={values.CVV}
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
        </Container>
   
    
    </form>
  );
};

export default AccountProfileDetails;
