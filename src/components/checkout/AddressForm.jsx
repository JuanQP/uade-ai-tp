import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm({values, ...props}) {

  function handleChange (event) {
    if(event.target.name === 'firstName' || event.target.name === 'lastName' || event.target.name === 'email') {
      props.onAddressChange({
        form: 'user',
        input: event.target.name,
        value: event.target.value,
      });
    }
    else {
      props.onAddressChange({
        form: 'address',
        input: event.target.name,
        value: event.target.type === 'checkbox' ? event.target.checked : event.target.value,
      });
    }
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dirección de envío
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Nombre"
            fullWidth
            autoComplete="given-name"
            value={values.user.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Apellido"
            fullWidth
            autoComplete="family-name"
            value={values.user.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Dirección de envío"
            fullWidth
            autoComplete="shipping address-line1"
            value={values.address.address1}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="email"
            name="email"
            label="E-mail"
            fullWidth
            autoComplete="email"
            value={values.user.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="state"
            name="state"
            label="Provincia"
            fullWidth
            value={values.address.state}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="city"
            name="city"
            label="Ciudad"
            fullWidth
            autoComplete="shipping address-level2"
            value={values.address.city}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Código postal"
            fullWidth
            autoComplete="shipping postal-code"
            value={values.address.zip}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Usar dirección en método de pago"
            checked={values.address.saveAddress}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
