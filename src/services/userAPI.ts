import axios from "axios";

type LoginResponse = {
  message: string;
  loginUser: {
    token: string;
    user: User
  }
}

type RegistrationResponse = {
  createdUser: string;
  message: string;
}

type UserRegisterData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export async function login(credentials: LoginCredentials) {
  const { data } = await axios.post<LoginResponse>("/api/users/login", credentials)
  return data.loginUser
}

export async function register(userData: UserRegisterData) {
  const { data } = await axios.post<RegistrationResponse>("/api/users/registration", userData)
  return data
}
