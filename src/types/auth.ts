export type UserRole = "USER" | "STORE";

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignUpRequest {
  email: string;
  password: string;
  nickname: string;
  phoneNumber: string;
  role: UserRole;
}

export interface AuthResponse {
  accessToken: string;
}

export interface SignUpResponse {
  userId: number;
}
