import { PRODUCT_CATEGORY_LABEL, type ProductCategory } from "@/types/product";

interface ProductMenuNavBarProps {
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
}

const CATEGORY_ICONS: Record<ProductCategory, string> = {
  ALL: "/icons/category_all.png",
  VEGETABLE: "/icons/category_vegetable.png",
  FRUIT: "/icons/category_fruit.png",
  MEAT_EGG: "/icons/category_meat_egg.png",
  SEAFOOD: "/icons/category_seafood.png",
  GRAIN: "/icons/category_grain.png",
  MEAL_KIT: "/icons/category_meal_kit.png",
  DAIRY_CHEESE: "/icons/category_dairy_cheese.png",
  PROCESSED: "/icons/category_processed.png",
  FROZEN_REFRIGERATED: "/icons/category_frozen.svg",
};

const ProductMenuNavBar = ({
  selectedCategory,
  onSelectCategory,
}: ProductMenuNavBarProps) => {
  return (
    <div className="w-full bg-white border-b border-gray-50">
      <ul className="flex items-center w-full gap-4 px-4 py-3 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {(
          Object.entries(PRODUCT_CATEGORY_LABEL) as [ProductCategory, string][]
        ).map(([key, label]) => {
          const isSelected = selectedCategory === key;
          return (
            <li
              key={key}
              className="flex-shrink-0 flex flex-col justify-center items-center gap-2.5 cursor-pointer group"
              onClick={() => onSelectCategory(key)}
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-2xl border-2 transition-all duration-200 ${
                  isSelected
                    ? "bg-sikggu-primary/10 border-sikggu-primary shadow-sm scale-105"
                    : "bg-gray-50 border-transparent group-hover:bg-gray-100"
                }`}
              >
                <img
                  src={CATEGORY_ICONS[key]}
                  alt={label}
                  className={`w-8 h-8 transition-all ${
                    isSelected
                      ? "opacity-100 scale-110"
                      : "opacity-60 group-hover:opacity-80"
                  }`}
                />
              </div>
              <span
                className={`text-[11px] transition-colors ${
                  isSelected
                    ? "font-bold text-gray-900"
                    : "font-medium text-gray-400 group-hover:text-gray-600"
                }`}
              >
                {label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductMenuNavBar;
