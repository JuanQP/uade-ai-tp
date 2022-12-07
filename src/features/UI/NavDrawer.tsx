import { Divider, Drawer, NavLink, Text } from "@mantine/core";
import { IconBrandGithub, IconCpu, IconHome, IconInfoCircle, IconLogin, IconLogout, IconShoppingCart, IconUser } from "@tabler/icons";
import { useAuthUser, useIsAuthenticated, useSignOut } from "react-auth-kit";
import { Link } from "react-router-dom";

const LINKS = [
  { label: 'Home', to: '/', Icon: IconHome },
  { label: 'Products', to: '/product-search', Icon: IconCpu },
  { label: 'Cart', to: '/cart', Icon: IconShoppingCart },
  { label: 'About', to: '#', Icon: IconInfoCircle },
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
  const accountLabel = isAuthenticated() ? 'Mis datos' : 'Ingresar'
  const accountHref = isAuthenticated() ? '/account' : '/login'
  const AccountIcon = isAuthenticated() ? IconUser : IconLogin

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
        component={Link}
        icon={<AccountIcon />}
        label={accountLabel}
        to={accountHref}
        styles={navLinkStyles}
        onClick={onClose}
      />
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
      {!isAuthenticated() ? null : (
        <NavLink
          icon={<IconLogout />}
          label="Salir"
          styles={navLinkStyles}
          onClick={handleLogOut}
        />
      )}
    </Drawer>
  )
}
