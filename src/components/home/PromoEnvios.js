import {
    Avatar,
    Card,
    CardContent,
    Grid,
    Typography
  } from '@material-ui/core';
  import {
    Truck as TruckIcon
  } from 'react-feather';
  import {
    indigo as colorindigo
  } from '@material-ui/core/colors';
  
  const PromoEnvios = (props) => (
    <Card
    sx={{  width: '130%'
    }}
    {...props}
  >
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h3"
            >
              Envios a todo el país al costo más bajo
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
              <TruckIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
  
  export default PromoEnvios;
  
