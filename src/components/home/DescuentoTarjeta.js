import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    Typography
  } from '@material-ui/core';
  import {
    CreditCard as CreditCardIcon
  } from 'react-feather';
  import {
    red as colorRed,
    indigo as colorindigo
  } from '@material-ui/core/colors';

  const DescuentoTarjeta = (props) => (
    <Card
      sx={{  width: '100%'
    }}
      {...props}
    >
      <CardContent>
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h4"
            >
              Paga con todas las tarjetas
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: colorindigo[600],
                height: 56,
                width: 56
              }}
            >
              <CreditCardIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  export default DescuentoTarjeta;

