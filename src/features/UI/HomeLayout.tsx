import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { NavDrawer } from "./NavDrawer";

export function HomeLayout() {

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
      {/* Here goes the page content 👇 */}
      <Outlet />
    </>
  )
}
