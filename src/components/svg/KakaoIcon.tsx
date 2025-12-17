const KakaoIcon = () => {
  const kakaoLogin = () => {
    // @TODO 카카오 로그인 로직
    return;
  };

  return (
    <div
      onClick={kakaoLogin}
      className="flex items-center justify-center transition bg-[#F5E14B] rounded-full shadow-sm cursor-pointer size-10 hover:shadow-md hover:scale-105"
    >
      <img
        src="/icons/kakaotalk.svg"
        width={24}
        height={24}
        alt="카카오톡 간편 로그인"
      />
    </div>
  );
};

export default KakaoIcon;
