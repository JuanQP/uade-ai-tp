import { Container, Drawer, NavLink } from "@mantine/core";
import { IconBrandGithub, IconHome, IconInfoCircle, IconShoppingCart, IconUser } from "@tabler/icons";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Header } from "./Header";

const LINKS = [
  { label: 'Home', to: '/', Icon: IconHome },
  { label: 'Cart', to: '#', Icon: IconShoppingCart },
  { label: 'Account', to: '#', Icon: IconUser },
  { label: 'About', to: '#', Icon: IconInfoCircle },
]

const GITHUB_LINK = {
  label: 'GitHub',
  to: 'https://github.com/JuanQP/uade-ai-tp',
  Icon: IconBrandGithub,
}

export function Layout() {

  const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <>
      <Header
        onCartClick={() => console.log("Cart icon clicked")}
        onMenuClick={() => setDrawerOpened(true)}
        onUserClick={() => console.log("User clicked")}
      />
      <Drawer
        opened={drawerOpened}
        onClose={() => setDrawerOpened(false)}
      >
        {LINKS.map(link => (
          <NavLink
            key={link.label}
            component={Link}
            label={link.label}
            to={link.to}
            icon={<link.Icon />}
          />
        ))}
        <NavLink
          component={"a"}
          icon={<GITHUB_LINK.Icon />}
          label={GITHUB_LINK.label}
          href={GITHUB_LINK.to}
          target="_blank"
        />
      </Drawer>
      <Container size="xl" p="sm">
        {/* Here goes the page content 👇 */}
        <Outlet />
      </Container>
    </>
  )
}
