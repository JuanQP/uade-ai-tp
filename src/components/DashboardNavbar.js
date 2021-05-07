import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import {
  Avatar,
} from '@material-ui/core';

const DashboardNavbar = ({ products, onMobileNavOpen, ...rest }) => {

  return (
    <AppBar
      elevation={0}
      {...rest}
    >
      <Toolbar>
       <RouterLink to="/">
      <Avatar
            src={'/static/images/Logo.png'}
            alt="Product"
            variant="square"
            sx={{
              height: 60,
              width: 75
            }}
          >
          </Avatar>
      </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <Hidden lgDown>
          <IconButton color="inherit" component={RouterLink} to="/app/cart-detail">
            <Badge
              badgeContent={products.map(p => p.quantity).reduce((a,b) => (a+b), 0)}
              color="secondary"
            >
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
