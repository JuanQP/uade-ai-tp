import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import ABMadmin from 'src/components/admin/ABMadmin';
import AdminListToolbar from 'src/components/admin/AdminListToolbar';
import ABMlist from 'src/__mocks__/ABMlist';

const ABM = () => (
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
        <AdminListToolbar />
        <Box sx={{ pt: 3 }}>
          <ABMadmin ABMlist={ABMlist} />
        </Box>
      </Container>
    </Box>
  </>
);

export default ABM;
