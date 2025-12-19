import { authApi } from "@/api/auth";
import AuthPageLayout from "@/components/layout/AuthPageLayout";
import GoogleIcon from "@/components/svg/GoogleIcon";
import KakaoIcon from "@/components/svg/KakaoIcon";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fetchSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await authApi.signIn({
        email,
        password,
      });

      localStorage.setItem("accessToken", data.accessToken);
      alert("✅ 성공적으로 로그인되었습니다.");
      navigate("/stores");
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        "❌ 로그인에 실패했습니다. 정보를 확인해주세요.";
      alert("🚨" + errorMessage);
      console.error("Login Error:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      alert('🔔 계정이 로그인 되어 있어 "/stores" 페이지로 리다이렉트 됩니다.');
      navigate("/stores", { replace: true });
    }
  }, [navigate]);

  return (
    <AuthPageLayout>
      <Link to="/" className="flex justify-center mt-6">
        <img
          src="/images/logo_typo.png"
          width={400}
          alt="SIKGGU"
          className="flex"
        />
      </Link>
      <form onSubmit={fetchSignIn} className="mt-4">
        <label htmlFor="email" className="block font-bold text-sikggu-gray-700">
          이메일
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일을 입력해주세요."
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
          placeholder="비밀번호를 입력해주세요."
          className="w-full px-6 py-4 my-4 border rounded-xl bg-sikggu-gray-100 border-sikggu-gray-300 focus:border-sikggu-primary"
        />
        <button
          type="submit"
          className="flex items-center justify-center w-full py-4 my-6 text-lg font-semibold text-white transition rounded-xl bg-sikggu-primary hover:bg-sikggu-primary-500/90"
        >
          로그인
        </button>
        <div className="flex items-center justify-between w-full h-20 px-4 my-6 rounded-xl bg-sikggu-primary-50">
          <span className="text-sikggu-gray-500 ">간편 로그인하기</span>
          <div className="flex gap-4">
            <GoogleIcon />
            <KakaoIcon />
          </div>
        </div>
        <span className="flex justify-center w-full text-sikggu-gray-500">
          식구가 처음이신가요?
          <Link
            to={"/sign-up?type=intro"}
            className="ml-2 underline cursor-pointer ml-3font-medium text-sikggu-primary-500 hover:text-sikggu-primary-700"
          >
            회원가입
          </Link>
        </span>
      </form>
    </AuthPageLayout>
  );
};

export default SignInPage;
