import type { ReactNode } from "react";
import { GrPrevious } from "react-icons/gr";
import { Router, useNavigate } from "react-router-dom";

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
    <main className="flex items-center justify-center w-screen bg-gray-50">
      <div
        className={`h-screen p-8 w-[640px] flex flex-col bg-white shadow-sm overflow-scroll ${
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
