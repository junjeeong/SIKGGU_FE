import { GoBell } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full h-16 pr-10 border-b border-b-gray-100">
      <Link to="/">
        <img src="/icons/logo.png" alt="식구" width={140} />
      </Link>
      <div className="flex gap-4">
        <button>
          <IoSearchOutline size={24} />
        </button>
        <button>
          <GoBell size={24} />
        </button>
        <button>
          <LiaShoppingBagSolid size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
