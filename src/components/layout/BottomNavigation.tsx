import { CiHeart, CiShoppingBasket } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { TfiHome } from "react-icons/tfi";

const BottomNavigation = () => {
  return (
    <div className="w-[600px] fixed bottom-0 items-center border-gray-300 border-[0.5px] shadow-2xl h-[60px] flex justify-around rounded-tl-2xl rounded-tr-2xl bg-white">
      <div className="flex flex-col items-center gap-1">
        <TfiHome size={20} />
        <span className="text-xs">홈</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <CiShoppingBasket size={24} />
        <span className="text-xs">주변 마트</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <CiHeart size={24} />
        <span className="text-xs">찜</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <IoPersonOutline size={24} />
        <span className="text-xs">내 정보</span>
      </div>
    </div>
  );
};

export default BottomNavigation;
