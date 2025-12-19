import StoreInformationCard from "@/components/card/StoreInformationCard";
import HeaderAndBottomNavLayout from "@/components/layout/HeaderAndBottomNavLayout";
import { MOCK_STORE_LIST } from "@/mock/MOCK_STORE_LIST";

const StoresPage = () => {
  return (
    <HeaderAndBottomNavLayout>
      <ul className="h-screen pb-[60px] overflow-scroll">
        {MOCK_STORE_LIST.map((store) => {
          return (
            <li key={store.id}>
              <StoreInformationCard info={store} />
            </li>
          );
        })}
      </ul>
    </HeaderAndBottomNavLayout>
  );
};

export default StoresPage;
