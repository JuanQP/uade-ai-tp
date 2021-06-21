import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ScrollToTop from 'src/ScrollToTop';

export default function PaymentForm({values, ...props}) {

  function handleChange (event) {
    props.onPaymentChange({
      form: 'payment',
      input: event.target.name,
      value: event.target.type === 'checkbox' ? event.target.checked : event.target.value,
    });
  };

  return (
    <React.Fragment>
      <ScrollToTop />
      {values.address.useAddress ? null :
      // Si no usa la dirección como dirección de facturación, mostramos esto
      <>
        <Typography variant="h6" gutterBottom>
          Dirección de facturación
        </Typography>
        <Grid container spacing={3} mb={2}>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Dirección de envío"
              fullWidth
              autoComplete="shipping address-line1"
              value={values.payment.address1}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="state"
              name="state"
              label="Provincia"
              fullWidth
              value={values.payment.state}
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
              value={values.payment.city}
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
              value={values.payment.zip}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </>}
      <Typography variant="h6" gutterBottom>
        Método de pago
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            name="cardName"
            label="Nombre en la tarjeta"
            fullWidth
            autoComplete="cc-name"
            value={values.payment.cardName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            name="cardNumber"
            label="Número de tarjeta"
            fullWidth
            autoComplete="cc-number"
            value={values.payment.cardNumber}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            name="expDate"
            label="Fecha de vencimiento"
            fullWidth
            autoComplete="cc-exp"
            value={values.payment.expDate}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            name="cvv"
            label="CVV"
            helperText="Últimos tres dígitos en el dorso de la tarjeta"
            fullWidth
            autoComplete="cc-csc"
            value={values.payment.cvv}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" checked={values.payment.saveCard} />}
            label="Usar estos datos como medio de pago predeterminado"
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
