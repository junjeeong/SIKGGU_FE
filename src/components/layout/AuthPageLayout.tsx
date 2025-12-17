import type { ReactNode } from "react";

const AuthPageLayout = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <main className="flex items-center justify-center w-screen bg-gray-50">
      <div
        className={`h-screen p-8 w-[640px] flex flex-col bg-white shadow-sm overflow-scroll ${
          className || ""
        }`}
      >
        {children}
      </div>
    </main>
  );
};

export default AuthPageLayout;
