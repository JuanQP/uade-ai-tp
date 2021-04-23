import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export function UserPage(props) {
  const classes = useStyles();

  function handleLogOutButtonClick() {
    props.onLogout();
  }

  return (
    <div>
      <h1>¡Hola {props.user.firstName}!</h1>
      <div className={classes.demo}>
        <Typography variant="subtitle1">Datos de la cuenta</Typography>
        <List dense={false}>
          <ListItem>
            <ListItemText
              primary={props.user.firstName}
              secondary={'Nombre'}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={props.user.lastName}
              secondary={'Apellido'}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={props.user.email}
              secondary={'E-mail'}
            />
          </ListItem>
        </List>
        <Button onClick={handleLogOutButtonClick} variant="outlined" color="secondary">
          Cerrar sesión
        </Button>
      </div>
    </div>
  );
}