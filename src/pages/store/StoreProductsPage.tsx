import ProductInformationCard from "@/components/card/ProductInformationCard";
import HeaderAndBottomNavLayout from "@/components/layout/HeaderAndBottomNavLayout";
import ProductMenuNavBar from "@/components/ProductMenuNavBar";
import { PRODUCT_LIST } from "@/mock/MOCK_PRODUCT_LIST";

const StoreProductsPage = () => {
  return (
    <HeaderAndBottomNavLayout>
      <figure className="w-full h-64">
        <img
          src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzB7oAA46R42G4ahbOKIvKyKm2B7XuiS2SPmKUeJjB66Ztez5Hp4rIqprdTfUlC5ErnmzPYAcV052lTA2JUHEfx9_5bysqfofaGE8E49ZjM-TDX19ItPXiaZ7H7c7YAPZlVaE8=w520-h350-n-k-no"
          alt="oo상점"
          className="object-cover w-full h-full"
        />
      </figure>

      <ProductMenuNavBar />

      <ul className="pb-[60px] overflow-scroll">
        {PRODUCT_LIST.map((product) => {
          return (
            <li key={product.id}>
              <ProductInformationCard info={product} />
            </li>
          );
        })}
      </ul>
    </HeaderAndBottomNavLayout>
  );
};

export default StoreProductsPage;
