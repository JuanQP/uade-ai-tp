import { Helmet } from 'react-helmet';
import {
  Backdrop,
  Box,
  CircularProgress,
  Container,
  Grid
} from '@material-ui/core';
import AccountProfile from 'src/components/account/AccountProfile';
import AccountProfileDetails from 'src/components/account/AccountProfileDetails';
import axios from 'axios';
import {useEffect, useState} from 'react';

const Account = (props) => {

  const [user, setUser] = useState({});
  const [waitingServer, setWaitingServer] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:4000/users/detail/' + props.user._id)
    .then((res) => {
      console.log(res.data);
      setUser(res.data.data);
      setWaitingServer(false);
    });
  }, [props.user._id]);

  function handleUserChange(modifiedUser) {
    setUser(modifiedUser);
  }

  function handleAccountDetailsSave() {
    setWaitingServer(true);
    axios.put('http://localhost:4000/users', user)
    .then((res) => {
      axios.get('http://localhost:4000/users/detail/' + props.user._id)
      .then((res) => {
        console.log(res.data);
        setUser(res.data.data);
        setWaitingServer(false);
    });
    })
    .catch((err) => console.error(err));
  }

  if(waitingServer) {
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={waitingServer}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <>
      <Helmet>
        <title>FQ Computer | Datos de la cuenta</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={4}
              md={6}
              xs={12}
            >
              <AccountProfile user={user} />
            </Grid>
            <Grid
              item
              lg={8}
              md={6}
              xs={12}
            >
              <AccountProfileDetails
                user={user}
                onAccountDetailsSave={handleAccountDetailsSave}
                onUserChange={handleUserChange}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Account;
