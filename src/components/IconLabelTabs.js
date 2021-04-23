import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import TuneIcon from '@material-ui/icons/Tune';
import {
  Link
} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 10000,
  },
});

export default function IconLabelTabs(props) {
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    props.onTabChanged(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={props.activeTab}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<HomeIcon />} label="Home" component={Link} to="/" />
        <Tab icon={<ShoppingCartIcon />} label="Productos" component={Link} to="/shop" />
        <Tab icon={<HelpOutlineIcon />} label="Quienes Somos" component={Link} to="/about" />
        {props.user
          ? <Tab icon={<TuneIcon />} label="Cuenta" component={Link} to="/user" />
          : <Tab icon={<AccountCircleIcon />} label="Loguearse" component={Link} to="/login" />
        }
      </Tabs>
    </Paper>
  );
}
