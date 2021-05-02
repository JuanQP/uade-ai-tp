import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
      FQ Computer
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  root: {
    maxWidth: 300,
  },
}));


export function Shop() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="mx">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Catalogo de Productos
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Aquí encontrara los mejores accesorios para su PC al mejor precio.
            </Typography>
          </Container>
        </div>
        <Card className={classes.root}>
        {/* Producto 1 */}
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="160"
          image="https://i.ibb.co/8rj7V3g/Micro-Traveler-9000-R-P1-350x250-1.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Mouse Genius
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Este modelo se adapta...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Comprar
        </Button>
        <Button size="small" color="primary">
          Ver +
        </Button>
      </CardActions>
      {/* Producto 2 */}
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="160"
          image="https://i.ibb.co/8rj7V3g/Micro-Traveler-9000-R-P1-350x250-1.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Mouse Logitech
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Este modelo se adapta...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Comprar
        </Button>
        <Button size="small" color="primary">
          Ver +
        </Button>
      </CardActions>
      {/* Producto 3 */}
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="160"
          image="https://i.ibb.co/8rj7V3g/Micro-Traveler-9000-R-P1-350x250-1.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Teclado Logitech
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Este modelo se adapta...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Comprar
        </Button>
        <Button size="small" color="primary">
          Ver +
        </Button>
      </CardActions>
    </Card>
    

      </main>
     
      {/* Footer */}
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
