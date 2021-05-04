import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import AccountProfile from 'src/components/account/AccountProfile';
import AccountProfileDetails from 'src/components/account/AccountProfileDetails';

const Account = (props) => {
  function handleAccountDetailsSave(data) {
    props.onAccountDetailsSave(data);
  }

  return (
    <>
      <Helmet>
        <title>Account | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth="lg">
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
              <AccountProfile user={props.user} />
            </Grid>
            <Grid
              item
              lg={8}
              md={6}
              xs={12}
            >
              <AccountProfileDetails user={props.user} onAccountDetailsSave={handleAccountDetailsSave} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Account;
