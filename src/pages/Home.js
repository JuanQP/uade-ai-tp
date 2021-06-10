import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import LatestProducts from 'src/components/home/LatestProducts';
import PromoEnvios from 'src/components/home/PromoEnvios';
import RetiraPorlocal from 'src/components/home/RetiraPorlocal';
import LatestSonido from 'src/components/home/LatestSonido';
import Carrusel  from 'src/components/home/Carrusel';
import DescuentoTarjeta  from 'src/components/home/DescuentoTarjeta';


const Home = ({productsdb, ...props}) => (
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
          <Carrusel/>
      <Container maxWidth={false}>
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            lg={8}
            md={12}
            xl={4}
            xs={12}
          >
       <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 3
          }}
          >
            <LatestProducts products={productsdb} />
        </Box>
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={4}
            xs={12}
          >
        <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 3
          }}
          >
            <LatestSonido products={productsdb} />
         </Box>
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={4}
            xs={12}
          >
        <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 2
          }}
          > 
        <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '6vh',
            py: 1
          }}
          >
            <PromoEnvios />
           </Box>
         <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '6vh',
            py: 1
          }}
          >
            <RetiraPorlocal />
         </Box>
         <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '6vh',
            py: 1
          }}
          >
            <DescuentoTarjeta />
         </Box>
         </Box> 
          </Grid>
        </Grid>
      </Container>
          </Container>
        </div>
      </main>
    </Box>
  </>
);

export default Home;
