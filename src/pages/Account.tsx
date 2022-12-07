import { Button, Container, Text } from "@mantine/core";
import { IconLogout } from "@tabler/icons";
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

export function Account() {

  const logOut = useSignOut()
  const navigate = useNavigate()

  function handleLogOut() {
    logOut()
    navigate('/')
  }

  return (
    <Container>
      <Text>This is a page you can see because you are logged in</Text>
      <Button
        leftIcon={<IconLogout />}
        onClick={handleLogOut}
      >
        Log out
      </Button>
    </Container>
  )
}
