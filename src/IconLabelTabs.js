import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 1000,
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
          <Tab icon={<HomeIcon />} label="Home" />
        <Tab icon={<ShoppingCartIcon />} label="Productos" />
        <Tab icon={<HelpOutlineIcon />} label="Quienes Somos" />
        <Tab icon={<AccessibilityIcon />} label="Loguearse" />
      </Tabs>
    </Paper>
  );
}