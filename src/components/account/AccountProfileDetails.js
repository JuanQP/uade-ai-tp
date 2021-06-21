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

  function handleChange(event) {
    props.onUserChange({
      ...props.user,
      [event.target.name]: event.target.value
    });
  };

  function handleShippingChange(event) {
    props.onUserChange({
      ...props.user,
      address: {
        ...props.user.address,
        [event.target.name]: event.target.value
      }
    });
  }

  function handlePaymentChange(event) {
    props.onUserChange({
      ...props.user,
      payment: {
        ...props.user.payment,
        [event.target.name]: event.target.value
      }
    });
  }

  function handleSaveButtonClick() {
    onAccountDetailsSave();
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
                value={props.user.firstName}
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
                value={props.user.lastName}
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
                value={props.user.email}
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
             Datos de Envío
            </Typography>
        <Card>
        <CardHeader
          subheader="Puede modificar sus datos de envío"
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
                name="address1"
                onChange={handleShippingChange}
                required
                value={props.user.address.address1}
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
                name="city"
                onChange={handleShippingChange}
                required
                value={props.user.address.city}
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
                name="province"
                onChange={handleShippingChange}
                required
                value={props.user.address.province}
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
                onChange={handleShippingChange}
                required
                value={props.user.address.zip}
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
                onChange={handlePaymentChange}
                required
                value={props.user.payment.cardName}
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
                onChange={handlePaymentChange}
                required
                value={props.user.payment.cardNumber}
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
                onChange={handlePaymentChange}
                required
                value={props.user.payment.expDate}
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
                label="cvv"
                name="cvv"
                onChange={handlePaymentChange}
                required
                value={props.user.payment.cvv}
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
