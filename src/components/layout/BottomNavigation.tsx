import { useState } from "react";
import { CiHeart, CiShoppingBasket } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { TfiHome } from "react-icons/tfi";

const BottomNavigation = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const commonButtonStyle =
    "flex flex-col items-center gap-1 transition-colors";
  const activeStyle = "text-sikggu-primary";
  const inactiveStyle = "text-gray-500";

  return (
    <div className="w-[600px] fixed bottom-0 items-center border-gray-300 border-[0.5px] shadow-2xl h-[60px] flex justify-around rounded-tl-2xl rounded-tr-2xl bg-white z-50">
      <button
        onClick={() => setCurrentPage("home")}
        className={`${commonButtonStyle} ${
          currentPage === "home" ? activeStyle : inactiveStyle
        } hover:text-sikggu-primary`}
      >
        <TfiHome size={20} />
        <span className="text-xs font-medium">홈</span>
      </button>

      <button
        onClick={() => setCurrentPage("shop")}
        className={`${commonButtonStyle} ${
          currentPage === "shop" ? activeStyle : inactiveStyle
        } hover:text-sikggu-primary`}
      >
        <CiShoppingBasket size={24} />
        <span className="text-xs font-medium">주변 상품</span>
      </button>

      <button
        onClick={() => setCurrentPage("heart")}
        className={`${commonButtonStyle} ${
          currentPage === "heart" ? activeStyle : inactiveStyle
        } hover:text-sikggu-primary`}
      >
        <CiHeart size={24} />
        <span className="text-xs font-medium">자주 가는 상점</span>
      </button>

      <button
        onClick={() => setCurrentPage("profile")}
        className={`${commonButtonStyle} ${
          currentPage === "profile" ? activeStyle : inactiveStyle
        } hover:text-sikggu-primary`}
      >
        <IoPersonOutline size={24} />
        <span className="text-xs font-medium">내 정보</span>
      </button>
    </div>
  );
};

export default BottomNavigation;
