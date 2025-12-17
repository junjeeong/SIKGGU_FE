import { Link } from "react-router-dom";
import AuthPageLayout from "../../components/layout/AuthPageLayout";
import GoogleIcon from "../../components/svg/GoogleIcon";
import KakaoIcon from "../../components/svg/KakaoIcon";

const SignUpStoreForm = () => {
  const handleSubmit = () => {
    //@TODO 회원가입 api 요청 로직 추가해야 함.
  };

  return (
    <AuthPageLayout>
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

        <label
          htmlFor="confirmPassword"
          className="block font-bold text-sikggu-gray-700"
        >
          비밀번호 확인
        </label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="비밀번호를 입력해주세요."
          className="w-full px-6 py-4 my-4 border rounded-xl bg-sikggu-gray-100 border-sikggu-gray-300 focus:border-sikggu-primary"
        />

        <label
          htmlFor="nickname"
          className="block font-bold text-sikggu-gray-700"
        >
          닉네임
        </label>
        <input
          type="text"
          id="nickname"
          placeholder="닉네임을 입력해주세요."
          className="w-full px-6 py-4 my-4 border rounded-xl bg-sikggu-gray-100 border-sikggu-gray-300 focus:border-sikggu-primary"
        />

        <label
          htmlFor="phoneNumber"
          className="block font-bold text-sikggu-gray-700"
        >
          전화번호
        </label>
        <input
          type="text"
          id="phoneNumber"
          placeholder="전화번호를 입력해주세요."
          className="w-full px-6 py-4 my-4 border rounded-xl bg-sikggu-gray-100 border-sikggu-gray-300 focus:border-sikggu-primary"
        />

        <label
          htmlFor="storeName"
          className="block font-bold text-sikggu-gray-700"
        >
          상점 이름
        </label>
        <input
          type="text"
          id="nickname"
          placeholder="상점 이름을 입력해주세요."
          className="w-full px-6 py-4 my-4 border rounded-xl bg-sikggu-gray-100 border-sikggu-gray-300 focus:border-sikggu-primary"
        />

        <label
          htmlFor="storeContact"
          className="block font-bold text-sikggu-gray-700"
        >
          상점 전화번호
        </label>
        <input
          type="text"
          id="storeContact"
          placeholder="가게 전화번호를 입력해주세요."
          className="w-full px-6 py-4 my-4 border rounded-xl bg-sikggu-gray-100 border-sikggu-gray-300 focus:border-sikggu-primary"
        />

        <label
          htmlFor="location"
          className="block font-bold text-sikggu-gray-700"
        >
          상점 위치
        </label>
        <input
          type="text"
          id="location"
          placeholder="상점 위치를 입력해주세요."
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

export default SignUpStoreForm;
