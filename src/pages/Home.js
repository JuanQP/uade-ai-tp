import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import LatestProducts from 'src/components/Home/LatestProducts';

const Home = () => (
  <>
    <Helmet>
      <title> FQ Computer | Home</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="ms">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={8}
            md={12}
            xl={4}
            xs={12}
          >
            <LatestProducts />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Home;
