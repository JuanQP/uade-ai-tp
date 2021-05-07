import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import {
  Avatar,
} from '@material-ui/core';

const MainNavbar = (props) => (
  <AppBar
    elevation={0}
    {...props}
  >
    <Toolbar sx={{ height: 64 }}>
     <RouterLink to="/">
      <Avatar
            src={'/static/images/Logo.png'}
            alt="Product"
            variant="square"
            sx={{
              height: 75,
              width: 80
            }}
          >
          </Avatar>
      </RouterLink>
    </Toolbar>
  </AppBar>
);

export default MainNavbar;
