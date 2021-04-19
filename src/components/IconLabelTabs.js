import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import HomeIcon from '@material-ui/icons/Home';
import {
  Link
} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 10000,
  },
});

export default function IconLabelTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<HomeIcon />} label="Home" component={Link} to="/" />
        <Tab icon={<ShoppingCartIcon />} label="Productos" component={Link} to="/shop" />
        <Tab icon={<HelpOutlineIcon />} label="Quienes Somos" component={Link} to="/about" />
        <Tab icon={<AccessibilityIcon />} label="Loguearse" component={Link} to="/login" />
      </Tabs>
    </Paper>
  );
}
