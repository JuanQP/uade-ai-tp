import { Divider, Drawer, NavLink, Text } from "@mantine/core";
import { IconBrandGithub, IconCpu, IconHome, IconInfoCircle, IconListCheck, IconLogin, IconLogout, IconShieldLock, IconShoppingCart, IconUser } from "@tabler/icons";
import { useAuthUser, useIsAuthenticated, useSignOut } from "react-auth-kit";
import { Link } from "react-router-dom";

const LINKS = [
  { label: 'Home', to: '/', Icon: IconHome },
  { label: 'Productos', to: '/product-search', Icon: IconCpu },
  { label: 'Carrito', to: '/cart', Icon: IconShoppingCart },
  { label: 'About', to: '#', Icon: IconInfoCircle },
]

const AUTH_LINKS = [
  { label: 'Mi cuenta', to: '/account', Icon: IconUser },
  { label: 'Mis compras', to: '/my-orders', Icon: IconListCheck },
]

const ADMIN_LINKS = [
  { label: 'Compras', to: '/admin/orders', Icon: IconShieldLock },
  { label: 'Productos', to: '/admin/products', Icon: IconShieldLock },
]

const GITHUB_LINK = {
  label: 'GitHub',
  to: 'https://github.com/JuanQP/uade-ai-tp',
  Icon: IconBrandGithub,
}

interface Props {
  opened: boolean;
  onClose: () => void;
}

const navLinkStyles = {
  label: {
    fontSize: '1.75rem',
  },
}

export function NavDrawer({ opened, onClose }: Props) {

  const auth = useAuthUser()
  const logOut = useSignOut()
  const isAuthenticated = useIsAuthenticated()

  function handleLogOut() {
    logOut()
    onClose()
  }

  return (
    <Drawer
      opened={opened}
      onClose={onClose}
    >
      <Text align="center">Hola, {auth()?.firstName ?? 'Invitado'} 👋</Text>
      {LINKS.map(link => (
        <NavLink
          key={link.label}
          component={Link}
          label={link.label}
          to={link.to}
          icon={<link.Icon />}
          styles={navLinkStyles}
          onClick={onClose}
        />
      ))}
      <NavLink
        component={"a"}
        icon={<GITHUB_LINK.Icon />}
        label={GITHUB_LINK.label}
        href={GITHUB_LINK.to}
        target="_blank"
        styles={navLinkStyles}
        onClick={onClose}
      />

      <Divider my="md" />

      {!isAuthenticated() ? (
        <NavLink
        component={Link}
        to="/login"
          icon={<IconLogin />}
          label="Ingresar"
          styles={navLinkStyles}
          />
          ) : (
            <>
          {AUTH_LINKS.map(link => (
            <NavLink
            key={link.label}
            component={Link}
            label={link.label}
            to={link.to}
            icon={<link.Icon />}
            styles={navLinkStyles}
            onClick={onClose}
            />
            ))}
          <NavLink
            icon={<IconLogout />}
            label="Salir"
            styles={navLinkStyles}
            onClick={handleLogOut}
          />
        </>
      )}
      {!auth()?.isAdmin ? null : (
        <>
          <Divider my="md" />
          {ADMIN_LINKS.map(link => (
            <NavLink
              key={link.label}
              component={Link}
              label={link.label}
              to={link.to}
              icon={<link.Icon color="blue" />}
              styles={navLinkStyles}
              onClick={onClose}
            />
          ))}
        </>
      )}
    </Drawer>
  )
}
