import { Link } from "react-router-dom";
import AuthPageLayout from "../../components/layout/AuthPageLayout";

const SignUpIntroPage = () => {
  const baseButtonStyle =
    "w-[300px] text-center py-3 mt-1 text-white font-bold rounded-lg transition-colors duration-200 bg-sikggu-primary hover:bg-sikggu-primary/80";

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <main className="flex w-[1200px] gap-16">
        <div className="bg-sikggu-primary-50 shadow-lg w-full h-[50vh] flex flex-col items-center justify-center p-10 rounded-xl">
          <div className="flex flex-col justify-center w-full gap-1">
            <h2 className="text-2xl font-bold text-center">사장님</h2>
            <p className="text-center text-sikggu-gray-500">
              마트를 등록하고 당장 팔아야 하는 식자재를 올려주세요
            </p>
          </div>
          <img
            src="/images/character_owner.png"
            width={170}
            alt="캐릭터_사장님"
            className="mt-3"
          />
          <Link to={"/sign-up?type=store"} className={`${baseButtonStyle} `}>
            마트 등록하기
          </Link>
        </div>

        {/* 자취생/1인 가구 버튼 */}
        <div className="bg-sikggu-primary-50 shadow-lg w-full h-[50vh] flex flex-col items-center justify-center p-10 rounded-xl">
          <div className="flex flex-col justify-center w-full gap-1">
            <h2 className="text-2xl font-bold text-center">자취생/1인 가구</h2>
            <p className="text-center text-sikggu-gray-500">
              주변의 식자재 마트를 찾고, 필요했던 식재료를 찾아보세요
            </p>
          </div>
          <img
            src="/images/character_user.png"
            width={170}
            alt="캐릭터_자취생및1인가구"
            className="mt-5"
          />
          <Link to={"/sign-up?type=user"} className={`${baseButtonStyle} `}>
            식재료 찾기
          </Link>
        </div>
      </main>
    </div>
  );
};

export default SignUpIntroPage;
