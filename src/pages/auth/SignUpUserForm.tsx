import { authApi } from "@/api/auth";
import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import AuthPageLayout from "../../components/layout/AuthPageLayout";
import GoogleIcon from "../../components/svg/GoogleIcon";
import KakaoIcon from "../../components/svg/KakaoIcon";

const SignUpUserForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const type = searchParams.get("type");
  const userRole = type === "user" ? "USER" : "STORE";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const postSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("❌ 비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      await authApi.signUp({
        email,
        password,
        nickname,
        phoneNumber,
        role: userRole,
      });

      alert("✅ 회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.");
      navigate("/sign-in");
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "❌ 회원가입에 실패했습니다.";
      alert(errorMessage);
    }
  };

  return (
    <AuthPageLayout role="자취생" signInOrSignup="회원가입">
      <form onSubmit={postSignUp} className="mt-4">
        <label htmlFor="email" className="block font-bold text-sikggu-gray-700">
          이메일
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일을 입력해주세요."
          required
          className="w-full px-6 py-4 my-4 border rounded-xl bg-sikggu-gray-100 border-sikggu-gray-300 focus:border-sikggu-primary text-sikggu-gray"
        />
        <label
          htmlFor="password"
          className="block font-bold text-sikggu-gray-700"
        >
          비밀번호
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="영문, 숫자, 특수문자 중 2가지 포함 8~20자"
          required
          className="w-full px-6 py-4 my-4 border rounded-xl bg-sikggu-gray-100 border-sikggu-gray-300 focus:border-sikggu-primary"
        />
        <label
          htmlFor="confirmPassword"
          className="block font-bold text-sikggu-gray-700"
        >
          비밀번호 확인
        </label>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="비밀번호를 다시 입력해주세요."
          required
          className="w-full px-6 py-4 my-4 border rounded-xl bg-sikggu-gray-100 border-sikggu-gray-300 focus:border-sikggu-primary"
        />
        <label
          htmlFor="nickname"
          className="block font-bold text-sikggu-gray-700"
        >
          닉네임
        </label>
        <input
          id="nickname"
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="닉네임을 입력해주세요."
          required
          className="w-full px-6 py-4 my-4 border rounded-xl bg-sikggu-gray-100 border-sikggu-gray-300 focus:border-sikggu-primary"
        />
        <label
          htmlFor="phoneNumber"
          className="block font-bold text-sikggu-gray-700"
        >
          전화번호
        </label>
        <input
          id="phoneNumber"
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="010-1234-5678"
          required
          className="w-full px-6 py-4 my-4 border rounded-xl bg-sikggu-gray-100 border-sikggu-gray-300 focus:border-sikggu-primary"
        />
        <button
          type="submit"
          className="flex items-center justify-center w-full py-4 my-6 text-lg font-semibold text-white transition rounded-xl bg-sikggu-primary hover:bg-sikggu-primary-500/90"
        >
          회원가입
        </button>
        <div className="flex items-center justify-between w-full h-20 px-4 my-6 rounded-xl bg-sikggu-primary-50">
          <span className="text-sikggu-gray-500 ">간편 회원가입하기</span>
          <div className="flex gap-4">
            <GoogleIcon />
            <KakaoIcon />
          </div>
        </div>
        <span className="flex justify-center w-full text-sikggu-gray-500">
          식구 계정이 있으신가요?
          <Link
            to={"/sign-in"}
            className="ml-2 underline cursor-pointer ml-3font-medium text-sikggu-primary-500 hover:text-sikggu-primary-700"
          >
            로그인
          </Link>
        </span>
      </form>
    </AuthPageLayout>
  );
};

export default SignUpUserForm;
