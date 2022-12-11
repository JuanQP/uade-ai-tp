import { RequireAuth, useAuthUser } from "react-auth-kit";
import { Navigate } from "react-router-dom";

interface Props {
  loginPath: string;
  children: JSX.Element;
}

export function RequireAdminAuth({ loginPath, children }: Props) {

  const authUser = useAuthUser()

  if(!authUser()?.isAdmin) {
    console.error("Para ver esta página tenés que ser admin")
    return <Navigate to="/" />
  }

  return (
    <RequireAuth loginPath={loginPath}>
      {children}
    </RequireAuth>
  )
}
