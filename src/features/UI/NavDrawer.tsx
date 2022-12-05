import { Drawer, NavLink } from "@mantine/core";
import { IconBrandGithub, IconCpu, IconHome, IconInfoCircle, IconShoppingCart, IconUser } from "@tabler/icons";
import { Link } from "react-router-dom";

const LINKS = [
  { label: 'Home', to: '/', Icon: IconHome },
  { label: 'Products', to: '/product-search', Icon: IconCpu },
  { label: 'Cart', to: '/cart', Icon: IconShoppingCart },
  { label: 'Account', to: '#', Icon: IconUser },
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

export function NavDrawer({ opened, onClose }: Props) {
  return (
    <Drawer
      opened={opened}
      onClose={onClose}
    >
      {LINKS.map(link => (
        <NavLink
          key={link.label}
          component={Link}
          label={link.label}
          to={link.to}
          icon={<link.Icon />}
          onClick={onClose}
        />
      ))}
      <NavLink
        component={"a"}
        icon={<GITHUB_LINK.Icon />}
        label={GITHUB_LINK.label}
        href={GITHUB_LINK.to}
        target="_blank"
        onClick={onClose}
      />
    </Drawer>
  )
}
