import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Card,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';  
import Footer from  'src/components/Footer';

const About = () => (
  <>
    <Helmet>
      <title> FQ Computer | ¿Quienes Somos?</title>
    </Helmet>
    <Box
      sx={{
      
        minHeight: '100%',
        py: 3
      }}
    >
    <Card>
      <main>
        <div>
          <Container maxWidth="lg">
            <Typography variant="h1" align="center" color="textPrimary" gutterBottom>
             FQ Computer
            </Typography>
            <Typography variant="h4" align="left" color="textSecondary" paragraph>
            Somos una empresa que nos dedicamos puramente a la venta de artículos de PC, buscamos continuamente nuevas formas de satisfacer las necesidades de nuestros clientes para garantizar bienes y servicios de calidad al precio más competitivo del mercado.
            </Typography>
            <Typography variant="h4" align="left" color="textSecondary" paragraph>
            Nos apoyamos en tres pilares fundamentales para lograrlo: el esfuerzo, la seriedad y el compromiso con nuestros clientes. 
            </Typography>
            <Typography variant="h4" align="left" color="textSecondary" paragraph>
            Somos una empresa que cree en el país y en su gente, y constantemente trabajamos con el objetivo de incluir productos fabricados en el país y ampliar las categorías, ya que somos conscientes de que el modelo de comercialización y los hábitos de consumo continúan transformándose en función de las necesidades de los clientes. 
            </Typography>
            <Typography variant="h4" align="left" color="textSecondary" paragraph>
            Nuestra relación con el entorno no se limita a un determinado tipo de público, sino que trabajamos con clientes corporativos, resellers/gremio y consumidores finales en pos de lograr una sinergia y forjar vínculos estrechos para conocerlos a la perfección y entender las necesidades que cada uno tiene.
            Nuestra meta en un futuro cercano está basada en ampliar mucho más las categorías de productos, abarcando todo tipo de electrodomésticos.
            </Typography>
            <Typography variant="h2" align="left" color="textPrimary" gutterBottom>
             Misión
            </Typography>
            <Typography variant="h4" align="left" color="textSecondary" paragraph>
            Nuestro objetivo es brindar la mejor experiencia de compra. Por eso nos enfocamos de lleno en lograr la satisfacción total de nuestro cliente en cada instancia, acompañándolo, aportando dedicación, profesionalismo y soluciones concretas. Ofrecemos productos de calidad al mejor precio con el objetivo de mejorar la vida diaria de las personas estableciendo un estrecho vínculo de confianza ante una necesidad puntual.
            </Typography>
            <Typography variant="h2" align="left" color="textPrimary" gutterBottom>
            Visión
            </Typography>
            <Typography variant="h4" align="left" color="textSecondary" paragraph>
            Vemos a toda LATAM como un mercado potencial e interesante. La calidad va más allá de las características inherentes de los productos que comercializamos, ya que involucra el cuidado del medio ambiente, el desarrollo personal y profesional de cada una de las personas que forman parte de Necxus, y una relación armónica con nuestro contexto. Esto se traduce en un compromiso por crear prosperidad colectiva para nuestro entorno. La constante autosuperación es nuestro faro.
            </Typography>
            <Typography variant="h2" align="left" color="textPrimary" gutterBottom>
             Valores
            </Typography>
            <Typography variant="h4" align="left" color="textSecondary" paragraph>
            - Liderazgo: Nos vemos como líderes en nuestra industria y aspiramos a ser los mejores. Por eso invertimos en talento de nivel para hacer crecer a nuestros líderes del futuro y mantener vigente nuestro éxito.  
            </Typography>
            <Typography variant="h4" align="left" color="textSecondary" paragraph>
           - Visión realista: Nuestra concepción es más contextual que dogmática respecto del negocio, lo cual implica que las decisiones son pragmáticas y basadas en hechos. 
           </Typography>
           <Typography variant="h4" align="left" color="textSecondary" paragraph>
          - Innovación: Nos esforzamos para mantener nuestra posición avanzada en tecnologías nuevas y dinámicas. En pos de destacarnos, somos ágiles en la adaptación y flexibles en la manera de conseguir nuevos retos. 
            </Typography>
         </Container>
        </div>
      </main>
  </Card>
    </Box>
    <Footer></Footer>
  </>
 
);

export default About;
