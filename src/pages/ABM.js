import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import ABMadmin from 'src/components/admin/ABMadmin';
import CustomerListToolbar from 'src/components/customer/CustomerListToolbar';
import ABMlist from 'src/__mocks__/ABMlist';

const ABM = () => (
  <>
    <Helmet>
      <title>Customers | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <CustomerListToolbar />
        <Box sx={{ pt: 3 }}>
          <ABMadmin ABMlist={ABMlist} />
        </Box>
      </Container>
    </Box>
  </>
);

export default ABM;
