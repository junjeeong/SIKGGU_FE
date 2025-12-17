const GoogleIcon = () => {
  const googleLogin = () => {
    // @TODO 구글 간편 로그인 로직
    return;
  };

  return (
    <div
      onClick={googleLogin}
      className="flex items-center justify-center transition bg-white rounded-full shadow-sm cursor-pointer size-10 hover:shadow-md hover:scale-105"
    >
      <img
        src="/icons/google.svg"
        width={24}
        height={24}
        alt="구글 간편 로그인"
      />
    </div>
  );
};

export default GoogleIcon;
