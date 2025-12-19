import BottomNavigation from "@/components/layout/BottomNavigation";
import Header from "@/components/layout/Header";
import type { ReactNode } from "react";

const HeaderAndBottomNavLayout = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <main className="flex justify-center w-screen">
      <div
        className={`relative h-screen w-[600px] flex flex-col overflow-scroll ${
          className || ""
        }`}
      >
        <Header />
        {children}
        <BottomNavigation />
      </div>
    </main>
  );
};

export default HeaderAndBottomNavLayout;
