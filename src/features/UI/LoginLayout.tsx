import { Box, Center, Container } from "@mantine/core";
import { Outlet } from "react-router-dom";

export function LoginLayout() {
  return (
    <Box sx={{
      background: 'linear-gradient(45deg, #0575E6, #00F260)',
      height: '100vh',
      width: '100vw'
    }}>
      <Container size="sm" sx={{ height: '100%' }}>
        <Center sx={{ height: '100%' }}>
          {/* Here goes the page content 👇 */}
          <Outlet />
        </Center>
      </Container>
    </Box>
  )
}
