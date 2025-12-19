import type {
  AuthResponse,
  SignInRequest,
  SignUpRequest,
  SignUpResponse,
} from "@/types/auth";
import axiosInstance from "./axiosInstance";

export const authApi = {
  signIn: async (signInData: SignInRequest): Promise<AuthResponse> => {
    const response = await axiosInstance.post(
      "/api/v1/auth/sign-in",
      signInData
    );
    return response.data;
  },

  signUp: async (signUpData: SignUpRequest): Promise<SignUpResponse> => {
    const response = await axiosInstance.post(
      "/api/v1/auth/sign-up",
      signUpData
    );
    return response.data;
  },
};
