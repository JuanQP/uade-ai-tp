import { Container, Drawer } from "@mantine/core";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";

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
      />
      <Container size="xl" p="sm">
        {/* Here goes the page content 👇 */}
        <Outlet />
      </Container>
    </>
  )
}
