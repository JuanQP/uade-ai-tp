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

function Home({productsdb, ...props}) {
  return (
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
               Encontrara los mejores artículos para su PC al mejor precio.
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
              lg={4}
              md={12}
            >
              <LatestProducts products={productsdb} />
            </Grid>
            <Grid
              item
              lg={4}
              md={12}
            >
              <LatestSonido products={productsdb} />
            </Grid>
            <Grid
              item
              container
              lg={4}
              md={12}
              space={2}
            >
              <Grid item xs={12}>
                <DescuentoTarjeta style={{height: '100%'}} />
              </Grid>
              <Grid item xs={12}>
                <PromoEnvios style={{height: '100%'}} />
              </Grid>
              <Grid item xs={12}>
                <RetiraPorlocal style={{height: '100%'}} />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Home;
