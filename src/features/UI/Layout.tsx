import { Container } from "@mantine/core";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { NavDrawer } from "./NavDrawer";

export function Layout() {

  const [drawerOpened, setDrawerOpened] = useState(false)

  return (
    <>
      <Header
        onMenuClick={() => setDrawerOpened(true)}
      />
      <NavDrawer
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
