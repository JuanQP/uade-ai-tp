import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import ABMadmin from 'src/components/admin/ABMadmin';

const ABM = ({onDeleteProduct, ...props}) => {

  function handleRemoveProduct(ids) {
    onDeleteProduct(ids);
  }

  return (
    <>
      <Helmet>
        <title>FQ Computer | Admin ABM</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <Box sx={{ pt: 3 }}>
            <ABMadmin
              ABMlist={props.productsdb}
              onDeleteProduct={handleRemoveProduct}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default ABM;
