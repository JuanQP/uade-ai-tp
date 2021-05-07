import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import LatestProducts from 'src/components/home/LatestProducts';
import DescuentoTarjeta from 'src/components/home/DescuentoTarjeta';
import PromoEnvios from 'src/components/home/PromoEnvios';
import RetiraPorlocal from 'src/components/home/RetiraPorlocal';
import LatestSonido from 'src/components/home/LatestSonido';
import Typography from '@material-ui/core/Typography';  

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
      <main>
        <div>
          <Container maxWidth="lg">
            <Typography variant="h1" align="center" color="textPrimary" gutterBottom>
             Bienvenidos a FQ Computer
            </Typography>
            <Typography variant="h4" align="center" color="textSecondary" paragraph>
             Encontrara los mejores accesorios para su PC al mejor precio.
            </Typography>
          </Container>
        </div>
      </main>
      <Container maxWidth={false}>
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
          <Grid
            item
            lg={8}
            md={12}
            xl={4}
            xs={12}
          >
            <LatestSonido />
          </Grid>
          <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
          >
            <DescuentoTarjeta />
            <PromoEnvios />
            <RetiraPorlocal />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Home;
