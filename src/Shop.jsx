import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import TileData from './TileData';

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
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,

    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
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
     
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
     
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span> {tile.model}</span>}
              actionIcon={
                <IconButton aria-label={`about  ${tile.title}`} className={classes.icon} >
                  <InfoIcon />
                </IconButton>                
              }
              actionPosition="left"
              actionIco2={
                <IconButton aria-label={`shop  ${tile.title}`} className={classes.icon} >
                  <AddShoppingCartIcon/>
                </IconButton>                
              }
        
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </main>
   
     
     {/* Footer */}
     <footer className={classes.footer}>
       <Copyright />
     </footer>
     {/* End footer */}
   </React.Fragment>
  );
 }
          
  
