import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import ScrollToTop from 'src/ScrollToTop';
import Sparkle from 'src/components/Sparkle';
import Button from '@material-ui/core/Button';
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  payButton: {
    background: 'linear-gradient(45deg, #00b09e 30%, #79fa6e 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}));

export default function Review({values, products, onBuy, onStepBack, ...props}) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ScrollToTop />
      <Typography variant="h6" gutterBottom>
        Resumen
      </Typography>
      <List disablePadding>
        {products.map((product, i) => (
          <ListItem className={classes.listItem} key={i}>
            <ListItemText
              primary={product.product.nombre}
              secondary={`${product.quantity} ${product.quantity === 1 ? "unidad" : "unidades"}`}
            />
            <Typography variant="body2">${product.product.precio * product.quantity}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="h2" className={classes.total}>
            ${products.map(p => p.product.precio * p.quantity).reduce((a,b) => (a+b), 0)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Envío
          </Typography>
          <Typography gutterBottom>
            {values.user.firstName} {values.user.lastName}
          </Typography>
          <Typography gutterBottom>
            {`${values.address.address1}, ${values.address.city}, ${values.address.province}, ${values.address.zip}`}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Facturación
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography gutterBottom>Nombre de la tarjeta</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{values.payment.cardName}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Número de la tarjeta</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{values.payment.cardNumber}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Fecha de vencimiento</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{values.payment.expDate}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Domicilio de facturación</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>
                {values.address.useAddress ?
                `${values.address.address1}, ${values.address.city}, ${values.address.province}, ${values.address.zip}`
                : `${values.payment.address1}, ${values.payment.city}, ${values.payment.province}, ${values.payment.zip}`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <Button onClick={onStepBack}>
            Volver
          </Button>
          <Sparkle color='random'>
            <Button
              variant="contained"
              color="primary"
              onClick={onBuy}
              className={classes.payButton}
              startIcon={<CheckIcon />}
            >
              Comprar
            </Button>
          </Sparkle>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
