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

type CurrentUserResponse = {
  status: number;
  message: string;
  data: User;
}

type UserRegisterData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

type UserOrdersResponse = {
  status: number;
  data: {
    docs: Array<Order>
    total: number;
    limit: number;
    page: number;
    pages: number;
  };
  message: string;
}

export async function login(credentials: LoginCredentials) {
  const { data } = await axios.post<LoginResponse>("/api/users/login", credentials)
  return data.loginUser
}

export async function register(userData: UserRegisterData) {
  const { data } = await axios.post<RegistrationResponse>("/api/users/registration", userData)
  return data
}

export async function currentUser() {
  const { data } = await axios.get<CurrentUserResponse>("/api/users/detail")
  return data.data
}

export async function getOrders() {
  const { data } = await axios.get<UserOrdersResponse>("/api/users/orders")
  return data.data.docs
}

export async function updateUser(values: Partial<User>) {
  await axios.patch("/api/users/detail", values)
}
