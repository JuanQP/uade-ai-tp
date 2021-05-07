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
      sx={{  width: '130%'
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
              Pagando con tarjeta de credito en el mes de mayo
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
        <Box
          sx={{
            pt: 2,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Typography
            sx={{
              color: colorRed[900],
              mr: 1
            }}
            variant="h3"
          >
            15%
          </Typography>
          <Typography
            color="textSecondary"
            variant="caption"
          >
            de descuento
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
  
  export default DescuentoTarjeta;
  
