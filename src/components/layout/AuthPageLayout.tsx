import type { ReactNode } from "react";

const AuthPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex items-center justify-center w-screen h-screen bg-gray-50">
      <div className="h-screen px-8 w-[480px] flex flex-col justify-center bg-white shadow-sm">
        {children}
      </div>
    </main>
  );
};

export default AuthPageLayout;
