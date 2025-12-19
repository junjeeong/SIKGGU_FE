import AuthPageLayout from "@/components/layout/AuthPageLayout";
import GoogleIcon from "@/components/svg/GoogleIcon";
import KakaoIcon from "@/components/svg/KakaoIcon";
import { Link } from "react-router-dom";

const SignInPage = () => {
  const handleSubmit = () => {
    //@TODO 로그인 api 요청 로직 추가해야 함.
  };

  return (
    <AuthPageLayout>
      <Link to="/" className="flex justify-center mt-6">
        <img
          src="/images/logo_mini.png"
          width={400}
          alt="SIKGGU"
          className="flex"
        />
      </Link>
      <form action={handleSubmit} className="mt-4">
        <label htmlFor="email" className="block font-bold text-sikggu-gray-700">
          이메일
        </label>
        <input
          type="email"
          id="email"
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
          type="password"
          id="password"
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
