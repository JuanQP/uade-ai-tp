import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

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
}));

export default function Review({values, products, ...props}) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Resumen
      </Typography>
      <List disablePadding>
        {products.map((product, i) => (
          <ListItem className={classes.listItem} key={i}>
            <ListItemText
              primary={`${product.product.producto} ${product.product.marca} ${product.product.modelo}`}
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
            {`${values.address.address1}, ${values.address.city}, ${values.address.state}, ${values.address.zip}`}
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
                {values.address.saveAddress ?
                `${values.address.address1}, ${values.address.city}, ${values.address.state}, ${values.address.zip}`
                : `${values.payment.address1}, ${values.payment.city}, ${values.payment.state}, ${values.payment.zip}`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
