import {
    Avatar,
    Card,
    CardContent,
    Grid,
    Typography
  } from '@material-ui/core';
  import {
    red as colorred
  } from '@material-ui/core/colors';
  import LocationOnIcon from '@material-ui/icons/LocationOn';
  
  const RetirarPorlocal = (props) => (
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
              Retire su compra gratis por nuestro local
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: colorred[600],
                height: 56,
                width: 56
              }}
            >
              <LocationOnIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
  
  export default RetirarPorlocal;
  
