import { IconLogin, IconUser } from "@tabler/icons";
import { useIsAuthenticated } from "react-auth-kit";
import { Link } from "react-router-dom";
import { HeaderButton } from "./HeaderButton";

export function HeaderAccountButton() {

  const isAuthenticated = useIsAuthenticated()
  const href = isAuthenticated() ? '/account' : '/login'
  const Icon = isAuthenticated() ? IconUser : IconLogin

  return (
    <Link to={href}>
      <HeaderButton Icon={Icon} />
    </Link>
  )
}
