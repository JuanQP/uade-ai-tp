import axios from "axios";

type LoginResponse = {
  message: string;
  loginUser: {
    token: string;
    user: User
  }
}

export async function login(credentials: LoginCredentials) {
  const { data } = await axios.post<LoginResponse>("/api/users/login", credentials)
  return data.loginUser
}
