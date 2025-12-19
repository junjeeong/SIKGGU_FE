const ProductMenuNavBar = () => {
  return (
    <ul className="min-h-[40px] flex items-center w-full overflow-x-auto border-b border-gray-50 whitespace-nowrap no-scrollbar">
      {MENU_LIST.map((category, index) => {
        return (
          <li
            key={index}
            className="w-[80px] flex-shrink-0 flex justify-center items-center cursor-pointer hover:text-green-600 transition-colors"
          >
            {category}
          </li>
        );
      })}
    </ul>
  );
};

const MENU_LIST = [
  "전체",
  "채소",
  "과일",
  "정육·계란",
  "해산물",
  "곡류",
  "밀키트",
  "유제품·치즈",
  "가공식품",
  "냉동·냉장",
];
export default ProductMenuNavBar;
