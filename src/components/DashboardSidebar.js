import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography
} from '@material-ui/core';
import {
  Home as HomeIcon,
  LogOut,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  AlertCircle as AboutIcon,
  Edit3 as EditIcon,
  List as ListIcon,
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon
} from 'react-feather';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import NavItem from './NavItem';

const items = [
  {
    href: '/app/home',
    icon: HomeIcon,
    title: 'Home',
    requiresAdmin: false,
  },

  {
    href: '/app/products',
    icon: ShoppingBagIcon,
    title: 'Catálogo de Productos',
    requiresAdmin: false,
  },
  {
    href: '/app/about',
    icon: AboutIcon,
    title: 'Quienes Somos',
    requiresAdmin: false,
  },
  {
    href: '/app/account',
    icon: SettingsIcon,
    title: 'Datos de la cuenta',
    requiresAdmin: false,
  },
  {
    href: '/app/ABM',
    icon: EditIcon,
    title: 'ABM',
    requiresAdmin: true,
  },
  {
    href: '/app/orders',
    icon: ListIcon,
    title: 'Listado de Pedidos',
    requiresAdmin: true,
  }
];

const DashboardSidebar = ({ onMobileClose, openMobile, onLogOut, user, productCount }) => {
  const location = useLocation();

  function handleLogOutClick() {
    onLogOut();
  }

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Avatar
          component={RouterLink}
          src={user.avatar ? `/static/images/avatars/${user.avatar}` : ''}
          sx={{
            cursor: 'pointer',
            width: 64,
            height: 64
          }}
          to="/app/account"
        />
        <Typography
          color="textPrimary"
          variant="h5"
        >
          {user.firstName}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.filter((item) => !item.requiresAdmin || user.isAdmin).map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
          <NavItem
            href={'/app/cart-detail'}
            key={'Detalle del Carrito'}
            title={`Detalle del Carrito (${productCount})`}
            icon={ShoppingCart}
          />
          <NavItem
            href={'#'}
            key={'Log out'}
            title={'Log out'}
            icon={LogOut}
            onClick={handleLogOutClick}
          />
        </List>
        <Typography
          align="center"
          gutterBottom
          variant="h4"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 15
          }}
        >
          Seguinos
        </Typography>
        <Typography
          align="center"
          variant="body2"
        >
          en nuestras redes
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          <TwitterIcon />
          <FacebookIcon />
          <InstagramIcon />
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
    </Box>

  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)'
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
};

export default DashboardSidebar;
