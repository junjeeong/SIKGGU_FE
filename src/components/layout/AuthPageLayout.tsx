import type { ReactNode } from "react";

const AuthPageLayout = ({
  children,
  className,
  role,
  signInOrSignup,
}: {
  children: ReactNode;
  className?: string;
  role?: "자취생" | "사장님";
  signInOrSignup?: "로그인" | "회원가입";
}) => {
  return (
    <main className="flex items-center justify-center w-screen ">
      <div
        className={`h-screen p-8 w-[640px] flex flex-col overflow-scroll ${
          className || ""
        }`}
      >
        {signInOrSignup && (
          <header className="mb-4">
            <h2 className="text-2xl font-bold">
              {role} {signInOrSignup}
            </h2>
          </header>
        )}
        {children}
      </div>
    </main>
  );
};

export default AuthPageLayout;
